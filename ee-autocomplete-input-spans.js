import { LitElement, html, css } from 'lit-element'
import { StyleableMixin } from './mixins/StyleableMixin'
import { ThemeableMixin } from './mixins/ThemeableMixin'

class EeAutocompleteInputSpans extends ThemeableMixin('ee-autocomplete-input-spans')(StyleableMixin(LitElement)) {
  static get properties () {
    return {
      name: {
        type: String
      },
      valueAsJson: {
        type: Boolean,
        attribute: 'value-as-json'
      }
    }
  }

  constructor () {
    super()
    this.valueAsJson = false

    this.itemElement = ''
    this.itemElementConfig = {}
    this.itemElementAttributes = {}
  }

  static get styles () {
    return [
      super.styles || [],
      css`
        :host {
          display: block;
        }

        #list {
          /* display: inline-block; */
        }

        #list > span {
          position: relative;
          display: inline-block;
          padding: 2px 5px;
          border: 1px solid #ddd;
          border-radius: 1em;
          margin: 2px;
          font-size: 0.9em;
          padding-right: 20px;
        }

        #list > span::after {
          content: 'x';
          position: absolute;
          right: 6px;
          color: #999;
          transform: scaleX(1.2);
        }

        #list > span:hover::after {
          color: #333;
        }

        #list > span:hover {
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          border-color: #ccc;
          background-color: #eee;
        }

        textarea {
          box-sizing: border-box;
          display: inline-block;
          outline: none;
          resize: none;
          vertical-align: middle;
          height: 1.8em;
          border: none;
          font-size: 1em;
          width: 120px;
        }

        textarea:focus, textarea:hover {
          outline: none
        }
      `
    ]
  }

  render () {
    return html`
      ${this.customStyle}
      ${this.ifLabelBefore}
      ${this.ifValidationMessageBefore}
      <div id="list">
        <textarea @input="${this._inputReceived}" rows="1" id="ta" spellcheck="false" autocomplete="false" autocapitalize="off" autocorrect="off" tabindex="1" dir="ltr" role="combobox" aria-autocomplete="list"></textarea>
      </div>
      ${this.ifValidationMessageAfter}
      ${this.ifLabelAfter}
      <input id="ni" type="hidden" name="${this.name}">
    `
  }

  firstUpdated () {
    const ni = this.shadowRoot.querySelector('#ni')
    ni.value = this.value
  }

  get value () {
    const r = []
    const list = this.shadowRoot.querySelector('#list')
    for (const span of list.children) {
      if (span.id === 'ta') continue
      r.push(span.firstChild.data[span.firstChild.config.id])
    }
    return r.join(',')
  }

  set value (v) {
    const list = this.shadowRoot.querySelector('#list')

    // Remove all children
    while (list.firstChild) {
      if (list.firstChild.id === 'ta') break
      list.removeChild(list.firstChild)
    }

    // Assign all children using pickedElement
    const ids = []
    if (Array.isArray(v)) {
      for (const o of v) {
        this.pickedElement(o)
        // ids.push(o[this.itemElementConfig.id])
      }
    } else if (typeof v === 'object' && v !== null) {
      for (const k of Object.keys(v)) {
        const $o = v[k]
        this.pickedElement($o)
        ids.push($o[this.itemElementConfig.id])
      }
    }

    // Sets the native input
    const ni = this.shadowRoot.querySelector('#ni')
    ni.value = ids.join(',')

    return ni.value
  }

  get validity () {
    return {
      valid: true
    }
  }

  setCustomValidity () {

  }

  _inputReceived (e) {
    this.autocompleteValue = this.shadowRoot.querySelector('#ta').value
  }

  setPickedElement (itemElement, itemElementConfig, itemElementAttributes) {
    this.itemElement = itemElement
    this.itemElementConfig = itemElementConfig
    this.itemElementAttributes = itemElementAttributes
  }

  /* API */
  pickedElement (data) {
    const parentEl = document.createElement(this.itemElement)
    const el = new parentEl.constructor.PickedElement()

    el.config = { ...el.config, ...this.itemElementConfig }
    for (const k of Object.keys(this.itemElementAttributes)) el.setAttribute(k, this.itemElementAttributes[k])
    el.data = data

    const list = this.shadowRoot.querySelector('#list')
    const span = document.createElement('span')
    const ta = this.shadowRoot.querySelector('#ta')
    span.appendChild(el)

    list.insertBefore(span, ta)
    ta.value = ''

    // Update the native input, which must always be the only true and final source
    // of picked IDs
    const ni = this.shadowRoot.querySelector('#ni')
    if (ni.value === '') {
      ni.value = data[el.config.id]
    } else {
      ni.value = [...ni.value.split(','), data[el.config.id]].join(',')
    }
  }
}

window.customElements.define('ee-autocomplete-input-spans', EeAutocompleteInputSpans)
