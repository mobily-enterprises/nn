import { LitElement, html, css } from 'lit-element'
import { StyleableMixin } from './mixins/StyleableMixin'
import { ThemeableMixin } from './mixins/ThemeableMixin'

import './ee-toolbar'

const arrowback = html`<svg class="icon" height="24" viewBox="0 0 24 24" width="24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>`
const menu = html`<svg class="icon" height="24" viewBox="0 0 24 24" width="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>`

export class EeHeader extends ThemeableMixin('ee-header')(StyleableMixin(LitElement)) {
  static get styles () {
    return [
      super.styles,
      css`
        :host {
          display: block;
          width: 100%;
        }

        div#header {
          display: flex;
          width: 100%;
          position: sticky;
          top: 0;
          right: 0;
          width: 100%;
          text-align: center;
          background-color: var(--ee-header-background, white);
          color: var(--ee-header-color, black);
          fill: var(--ee-header-color, black);
          border-bottom: 1px solid #eee;
        }

        :host([menu]) div[title],
        :host([back]) div[title] {
          padding-right: 46px;
        }

        :host([menu][back]) div[title]{
          padding-right: 92px;
        }

        .toolbar .subtitle {
          color: rgba(255, 255, 255, 0.75);
        }
        .toolbar button.icon {
          appearance: none;
          -webkit-appearance: none;
          font-size: inherit;
          vertical-align: middle;
          background: transparent;
          border: none;
          cursor: pointer;
          -webkit-appearance: none;
          height: 40px;
          width: 40px;
          padding: 4px;
          margin: auto 3px;
          border: 1px solid transparent;
          color: var(--ee-header-color, black);
        }

        .toolbar button.icon:focus, .toolbar button.icon:hover {
          outline: 0;
          border: 1px solid var(--ee-header-lines-color, #bdbdbd);
        }

        .toolbar button.icon:active {
          outline: 0;
          border: 1px solid #bdbdbd;
          box-shadow: none
          /* animation: fadeIn 0.1s ease-in; */
        }

        .toolbar button, .toolbar button svg {
          color: var(--ee-header-color);
          fill: var(--ee-header-color);
        }

        .toolbar div.actions {
          position: absolute;
          right: 20px;
          display: inline;
        }

        ::slotted([slot=actions]) {
          display: flex
        }

        .toolbar div.actions ::slotted(*[slot="actions"]) a {
          line-height: unset
        }

        .toolbar div.controls {
          align-items: left;
        }

        .toolbar div.controls ::slotted(*[slot="controls"]) {
        }

      `
    ]
  }

  static get properties () {
    return {
      // Users can set these attributes to get built-in basic controls and title text.
      // Otherwise, they can user their own with slot="controls" and slot="header-title"
      back: { type: Boolean, reflect: true },
      menu: { type: Boolean, reflect: true },
      backEvent: { type: Function, attribute: 'back-event' },
      menuEvent: { type: Function, attribute: 'menu-event' },
      headerTitle: { type: String, attribute: 'header-title' },
      headerSubtitle: { type: String, attribute: 'header-subtitle' }
    }
  }

  constructor () {
    super()
    this.headerTitle = ''
  }

  menuEvent () {}

  backEvent () {}

  render () {
    if (this.themeRender) return this.themeRender()
    return html`
      <div id="header">
        <ee-toolbar class="toolbar">
          <div class="controls">
            ${this.menu ? html`<button class="icon" title="Menu" @click="${this._menuEvent}">${menu}</button>` : ''}
            ${this.back ? html`<button class="icon" title="Back" @click="${this._backEvent}">${arrowback}</button>` : ''}
            <slot name="controls"></slot>
          </div>
          <div title>
          ${this.headerTitle
            ? html`
                ${this.headerTitle}
                ${this.headerSubtitle ? html`<div class="subtitle">${this.headerSubtitle}</div>` : ''}
            `
            : html`
              <slot name="header-title"></slot>
            `
          }
          </div>
          <div class="actions">
            <slot name="actions"></slot>
          </div>
        </ee-toolbar>
        <slot name="sub-toolbar"></slot>
      </div>
    `
  }

  _menuEvent () {
    this.dispatchEvent(new CustomEvent('menu-clicked', { bubbles: true, composed: true }))
    this.menuEvent()
  }

  _backEvent () {
    this.dispatchEvent(new CustomEvent('back-clicked', { bubbles: true, composed: true }))
    this.backEvent()
  }
}
customElements.define('ee-header', EeHeader)
