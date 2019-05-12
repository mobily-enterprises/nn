import { LitElement, html } from 'lit-element'
import { CommonMixin } from './CommonMixin.js'
import { HTMLBasePropsAndMethods, HTMLFormElementPropsAndMethods, defaultReflectedAttributes } from './common.js'

class Button extends CommonMixin(LitElement) {
  static get properties () {
    return {}
  }

  get reflectedProperties () {
    return [
      ...HTMLBasePropsAndMethods,
      ...HTMLFormElementPropsAndMethods
      // Methods: NONE https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
    ]
  }

  get reflectedAttributes () {
    return [ ...defaultReflectedAttributes, 'autofocus', 'autocomplete', 'disabled', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'name', 'type', 'value' ]
  }

  render () {
    return html`<button @click="${this._clicked}" id="_native">
                  <slot></slot>
                </button>`
  }

  _clicked () {
    if (this.getAttribute('type') === 'submit') this.form.submit()
  }
}
customElements.define('nn-button', Button)
