import{LitElement,css,html}from"./node_modules/lit-element/lit-element.js";import{NativeReflectorMixin}from"./mixins/NativeReflectorMixin.js";import{InputMixin}from"./mixins/InputMixin.js";import{FormElementMixin}from"./mixins/FormElementMixin.js";import{LabelsMixin}from"./mixins/LabelsMixin.js";import{StyleableMixin}from"./mixins/StyleableMixin.js";import{ThemeableMixin}from"./mixins/ThemeableMixin.js";class NnInputRadio extends ThemeableMixin("nn-input-radio")(FormElementMixin(LabelsMixin(StyleableMixin(InputMixin(NativeReflectorMixin(LitElement)))))){static get styles(){return[super.styles||[],css`
      `]}render(){return html`
      ${this.customStyle}
      ${this.ifLabelBefore}
      <input as-radio value-source="checked" @change="${this._excludeOthers}" type="radio" id="native"  real-time-event="input">
      ${this.ifLabelAfter}
    `}_excludeOthers(e){// All other elements with the same name, marked as `as-radio`
const others=[...this.form.elements].filter(el=>el!==this&&el.getAttribute("name")&&el.getAttribute("name")===this.getAttribute("name")&&null!==el.getAttribute("as-radio"));for(const el of others){const prop=el.getAttribute("value-source")||"checked";el[prop]=!1}}}customElements.define("nn-input-radio",NnInputRadio);