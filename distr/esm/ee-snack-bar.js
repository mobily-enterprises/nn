import{LitElement,css,html}from"./node_modules/lit-element/lit-element.js";import{StyleableMixin}from"./mixins/StyleableMixin.js";import{ThemeableMixin}from"./mixins/ThemeableMixin.js";class EeSnackBar extends ThemeableMixin("ee-snack-bar")(StyleableMixin(LitElement)){static get styles(){return[css`
        :host {
          display: block;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 12px;
          background-color: var(--app-primary-color);
          color: var(--app-light-text-color);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          text-align: center;
          will-change: transform;
          transform: translate3d(0, 100%, 0);
          transition-property: visibility, transform;
          transition-duration: 0.2s;
          visibility: hidden;
        }

        :host([active]) {
          visibility: visible;
          transform: translate3d(0, 0, 0);
        }

        :host([theme="success"]) {
          background-color: green;
          color: white;
        }

        :host([theme="info"]) {
          background-color: gray;
          color: white;
        }

        :host([theme="error"]) {
          background-color: red;
          color: white;
        }
        @media (min-width: 460px) {
          :host {
            width: 320px;
            margin: auto;
          }
        }
      `]}render(){return html`
      ${this.message}
    `}static get properties(){return{active:{type:Boolean,reflect:!0},message:{type:String}}}_eventListener(e){const theme=e.detail.theme||"info";this.setAttribute("theme",theme);this.message=e.detail.message;this.show()}connectedCallback(){super.connectedCallback();document.addEventListener("snack-bar",this.boundEventListener)}disconnectedCallback(){super.disconnectedCallBack();document.removeEventListener("snack-bar",this.boundEventListener)}constructor(){super();this.active=!1;this.boundEventListener=this._eventListener.bind(this);this.intervalId=null}show(){this.active=!0;if(this.intervalId)clearInterval(this.intervalId);this.intervalId=setInterval(()=>{this.active=!1},3e3)}}window.customElements.define("ee-snack-bar",EeSnackBar);