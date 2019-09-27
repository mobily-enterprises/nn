import { LitElement, html } from 'lit-element'
import { NativeReflectorMixin } from './mixins/NativeReflectorMixin.js'
import { FormElementMixin } from './mixins/FormElementMixin.js'
import { InputMixin } from './mixins/InputMixin.js'
import { ThemeableMixin } from './mixins/ThemeableMixin.js'

class NnInputButton extends ThemeableMixin('nn-input-button')(FormElementMixin(InputMixin(NativeReflectorMixin(LitElement)))) {
  static get properties () {
    return {}
  }

  render () {
    return html`
      <input type="button" id="native">
        <slot></slot>
     `
  }

  constructor () {
    super()
    this.realTimeEvent = ''
  }
}
customElements.define('nn-input-button', NnInputButton)
