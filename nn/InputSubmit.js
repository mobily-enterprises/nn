import { LitElement, html } from 'lit-element'
import { NativeReflectorMixin } from '../mixins/NativeReflectorMixin.js'
import { FormElementMixin } from '../mixins/FormElementMixin.js'
import { defaultBootProperties, baseProperties, inputIDLProperties, alwaysSkipAttributes } from '../common.js'

class InputSubmit extends FormElementMixin(NativeReflectorMixin(LitElement)) {
  static get properties () {
    return {}
  }

  get skipAttributes () {
    return [
      ...alwaysSkipAttributes,
      'form', 'type'
    ]
  }

  get reflectProperties () {
    return [
      ...baseProperties,
      ...inputIDLProperties
    ]
  }

  get bootProperties () {
    return [
      ...defaultBootProperties
    ]
  }

  render () {
    return html`
      ${this.customStyle}
      <input @click="${this._formSubmit}" type="submit" id="native">
     `
  }

  _formSubmit (e) {
    if (this.form) {
      this.form.submit()
    }
  }
}
customElements.define('nn-input-submit', InputSubmit)