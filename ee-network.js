import { LitElement, html, css } from 'lit-element'
import { StyleableMixin } from './mixins/StyleableMixin.js'
import { ThemeableMixin } from './mixins/ThemeableMixin.js'

export class EeNetwork extends ThemeableMixin('ee-network')(StyleableMixin(LitElement)) {
  static get styles () {
    return [
      super.styles,
      css`
        :host {
          display: block;
          position: relative;
        }

        :host([inline]) {
          display: inline-block;
        }

        #overlay {
          display: none; /* Hide by default */
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 100000;
          text-align: center;
          transition: background var(--ee-network-transition-duration, 200ms);
        }

        #overlay.overlay-loading {
          display: block;
          color: var(--ee-network-overlay-loading-color, #666);
          background-color: var(--ee-network-overlay-loading-background-color, rgba(190, 190, 190, 0.75));
        }

        #overlay.clear {
        }

        #overlay.overlay-error {
          display: block;
          cursor: pointer; /* Hint that the object is clickable */
          color: var(--ee-network-overlay-error-color, #c00);
          background-color: var(--ee-network-overlay-error-background-color, rgba(255, 0, 0, 0.25));
        }

        #overlay #statusMessage {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
        }

        #content-wrapper.overlay-error,
        :host([status="overlay-error"]) {
          pointer-events: none;
          opacity: 0.25;
          min-height: 1.25rem; /* FIXME: find a proper value, this is made up */
        }
      `
    ]
  }

  static get properties () {
    return {
      manageLoadingErrors: {
        type: Boolean,
        attribute: 'manage-loading-errors'
      },
      manageSavingErrors: {
        type: Boolean,
        attribute: 'manage-saving-errors'
      },
      retryMethod: {
        type: Function,
        attribute: false
      },
      noReloadOnTap: {
        type: Boolean,
        attribute: 'no-reload-on-tap'
      },
      status: {
        type: String,
        reflect: true
      },
      statusMessages: {
        type: Object,
        attribute: 'status-messages'
      },
      messenger: {
        type: Function,
        attribute: false
      },
      overlayClass: {
        type: String,
        attribute: false
      },
      response: { type: Function, attribute: false },
      prefetch: { type: Function, attribute: false }
    }
  }

  constructor () {
    super()
    this.manageLoadingErrors = false
    this.manageSavingErrors = false
    this.retryMethod = null
    this.noReloadOnTap = false
    this.status = 'loaded'
    this.statusMessages = {
      loading: 'Loading\u2026', // &hellip; equivalent
      saving: 'Saving\u2026', // &hellip; equivalent
      error: 'An error has occurred. Click here to try again.'
    }

    this.lastInitObject = null
    this.lastUrl = null
    this.response = this.prefetch = () => {}
  }

  render () {
    if (this.themeRender) return this.themeRender()
    return html`
      <div id="overlay" class="${this.overlayClass}" @click="${this._overlayClicked}">
        <div id="statusMessage">${this.statusMessages[this.status]}</div>
      </div>
      <slot></slot>
    `
  }

  firstUpdated () {
    this._setOverlay()
  }

  _setOverlay () {
    switch (this.status) {
    case 'loaded':
    case 'saved':
      this.overlayClass = 'clear'
      break
    case 'loading':
    case 'saving':
      this.overlayClass = 'overlay-loading'
      break
    case 'loading-error':
      this.overlayClass = this.manageLoadingErrors ? 'overlay-error' : 'clear'
      break
    case 'saving-error':
      this.overlayClass = this.manageSavingErrors ? 'overlay-error' : 'clear'
      break
    }
  }

  async _overlayClicked (e) {
    if (this.noReloadOnTap) return

    // Stop the event here
    e.stopPropagation()
    e.preventDefault()

    // If the status is 'error', try to reload
    if (this.status === 'loading-error' || this.status === 'saving-error') {
      if (!this.retryMethod) {
        const fetched = await this.fetch(this.lastUrl, this.lastInitObject)
        if (fetched.ok) {
          this.dispatchEvent(new CustomEvent('retry-successful', {
            detail: {
              url: this.lastUrl,
              initObject: this.lastInitObject,
              fetched
            },
            composed: true,
            bubbles: false
          }))
        }
      }
      else this.retryMethod(this.status, this.lastUrl, this.lastInitObject)
    }
  }

  response () {}

  messenger () {}

  async fetch (url, initObject = {}) {
    this.lastUrl = url
    this.lastInitObject = initObject

    // Work out manageErrors, which will only ever
    // applu to GET
    const fetchMethod = (initObject && initObject.method && initObject.method.toUpperCase()) || 'GET'
    const isGet = fetchMethod === 'GET'
    initObject.url = url

    this.status = isGet ? 'loading' : 'saving'
    this._setOverlay()
    this.messenger(this.status, url, initObject)
    this.prefetch(initObject)

    try {
      const response = await fetch(initObject.url, initObject)

      // Wait for the _actual_ data to get here
      const r2 = response.clone()
      await r2.text()

      if (response.ok) {
        this.status = isGet ? 'loaded' : 'saved'
      } else {
        this.status = isGet ? 'loading-error' : 'saving-error'
      }
      this._setOverlay()
      this.messenger(this.status, url, initObject, response)
      // Response hook
      this.response(response)

      return response
    } catch (e) {
      this.status = isGet ? 'loading-error' : 'saving-error'
      this._setOverlay()
      this.messenger(this.status, url, initObject)
      this.response(null)
      throw (e)
    }
  }
}
customElements.define('ee-network', EeNetwork)
