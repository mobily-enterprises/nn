import { html } from 'lit-element'
import { InputText } from './InputText'

class InputTel extends InputText {
  render () {
    return html`
      ${this.customStyle}
      ${this.ifLabelBefore}
      ${this.ifValidationMessageBefore}
      <input type="tel" id="native">
      ${this.ifValidationMessageAfter}
      ${this.ifLabelAfter}
    `
  }
}
window.customElements.define('nn-input-tel', InputTel)
