import { LitElement, html, css } from 'lit-element'
import { StyleableMixin } from './mixins/StyleableMixin.js'
import { ThemeableMixin } from './mixins/ThemeableMixin.js'

export class EeAutocompleteItemLi extends ThemeableMixin('ee-autocomplete-item-li')(StyleableMixin(LitElement)) {
  static get styles () {
    return [
      super.styles || [],
      css`
        :host {
          display: block;
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }

        :host(:last-child) {
          border-bottom: unset;
        }

        :host(:hover) {
          background-color: #eee;
        }

        li {
          list-style: none;
        }

      `
    ]
  }

  static get properties () {
    return {
      data: {
        type: Object,
        attribute: false
      },
      config: {
        type: Object,
        attribute: false
      }
    }
  }

  constructor () {
    super()
    this.config = {
      id: 'id',
      path: 'name'
    }
  }

  render () {
    return html`
    <li>${this.data[this.config.path]}</li>
    `
  }

  /* API */

  get idValue () {
    return this.data[this.config.id]
  }

  get textValue () {
    return this.data[this.config.path]
  }

  static get PickedElement () {
    return EeAutocompleteItemLiView
  }
}
customElements.define('ee-autocomplete-item-li', EeAutocompleteItemLi)

class EeAutocompleteItemLiView extends LitElement {
  static get styles () {
    return [
      super.styles || [],
      css`
        :host {
          display: inline-block;
        }
      `
    ]
  }

  static get properties () {
    return {
      data: {
        type: Object,
        attribute: false
      },
      config: {
        type: Object,
        attribute: false
      }
    }
  }

  constructor () {
    super()
    this.config = {
      id: 'id',
      path: 'name'
    }
  }

  render () {
    return html`
      -${this.data[this.config.path]}-
    `
  }
}
customElements.define('ee-autocomplete-item-li-view', EeAutocompleteItemLiView)