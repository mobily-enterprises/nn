import { html } from 'lit-element'
import { NnInputText } from './nn-input-text'

class NnInputPassword extends NnInputText {
  render () {
    if (this.themeRender) return this.themeRender()
    return html`
      ${this.customStyle}
      ${this.ifLabelBefore}
      <input type="password" id="native">
      ${this.ifLabelAfter}
    `
  }
}
window.customElements.define('nn-input-password', NnInputPassword)
