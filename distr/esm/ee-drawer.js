function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _templateObject4(){var a=_taggedTemplateLiteral(["<button id=\"close\" @click=\"","\">","</button>"]);return _templateObject4=function(){return a},a}function _templateObject3(){var a=_taggedTemplateLiteral(["\n      <div class=\"container\">\n        ","\n        <nav>\n          <slot></slot>\n        </nav>\n      </div>\n    "]);return _templateObject3=function(){return a},a}function _templateObject2(){var a=_taggedTemplateLiteral(["\n        :host {\n          display: block;\n          position: fixed;\n          top: 0;\n          left: 0;\n        }\n\n        :host([opened]) {\n          width: 100vw;\n          height: 100vh;\n        }\n\n        div.container {\n          height: 100vh;\n          position: fixed;\n          top: 0;\n          left: 0;\n          will-change: transform;\n          transform: translateX(-100%);\n          overflow-x: hidden;\n          transition: transform 0.3s ease-out;\n          background-color: var(--drawer-background, initial);\n        }\n\n        :host([opened]) div.container {\n          will-change: transform;\n          transform: translateX(0);\n        }\n\n        :host([modal][opened]) div.container {\n          box-shadow: var(--drawer-shadow, 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.14), 0 0 0 100vw rgba(0, 0, 0, 0.15)) \n        }\n\n        #close {\n          -webkit-appearance: none;\n          color: white;\n          fill: white;\n          position: absolute;\n          top: 5px;\n          right: 5px;\n          z-index: 10;\n          background: transparent;\n          border: none;\n        }\n\n        button#close:focus, button#close:active {\n            outline: none !important;\n          }\n\n        button#close:active {\n          filter: brightness(50%)\n        }\n\n\n        .container > nav  {\n          box-sizing: border-box;\n          width: 100%;\n          min-width: 300px;\n          height: 100%;\n          padding: 24px;\n          background: var(--app-drawer-background-color);\n          position: relative;\n          overflow: scroll;\n          padding-bottom: 64px;\n        }\n\n        .container > nav ::slotted(a),\n        .container > nav ::slotted(.drawer-item) {\n          display: block;\n          text-decoration: none;\n          color: var(--app-drawer-text-color);\n          line-height: 40px;\n          padding: 0 24px;\n          cursor: pointer;\n        }\n\n        .container  > nav ::slotted(a[selected]),\n        .container  > nav ::slotted(.drawer-item[selected]) {\n          color: var(--app-drawer-selected-color);\n          font-weight: bolder;\n          border-left: 3px solid var(--app-drawer-selected-color);\n          background-color: rgba(255,255,255, 0.1);\n        }\n\n        .container  > nav ::slotted(a:hover),\n        .container  > nav ::slotted(.drawer-item:hover) {\n          background-color: rgba(255,255,255, 0.05);\n        }\n\n        .container  > nav ::slotted(* .head) {\n          color: white;\n          width: 100%;\n          border-bottom: 1px solid white;\n          padding: 6px 70% 6px 0;\n          font-size: 1.15em;\n          margin: 10px auto;\n        }\n      "]);return _templateObject2=function(){return a},a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _get(a,b,c){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(a,b,c){var d=_superPropBase(a,b);if(d){var e=Object.getOwnPropertyDescriptor(d,b);return e.get?e.get.call(c):e.value}},_get(a,b,c||a)}function _superPropBase(a,b){for(;!Object.prototype.hasOwnProperty.call(a,b)&&(a=_getPrototypeOf(a),null!==a););return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _templateObject(){var a=_taggedTemplateLiteral(["<svg class=\"icon\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></svg>"]);return _templateObject=function(){return a},a}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}import{L as LitElement,c as css,h as html}from"./lit-element-97ae09cb.js";import{S as StyleableMixin}from"./StyleableMixin-6a125586.js";import{T as ThemeableMixin}from"./ThemeableMixin-af62e1ed.js";var close=html(_templateObject()),EeDrawer=/*#__PURE__*/function(a){function b(){var a;return _classCallCheck(this,b),a=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this)),a.modal=!1,a.closeButton=!0,a.opened=!1,a}return _inherits(b,a),_createClass(b,null,[{key:"styles",get:function get(){return[css(_templateObject2())]}},{key:"properties",get:function get(){return{opened:{type:Boolean,reflect:!0},modal:{type:Boolean},closeButton:{type:Boolean,attribute:"close-button"}}}}]),_createClass(b,[{key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(b.prototype),"connectedCallback",this).call(this),this.addEventListener("click",this._handleOutsideClick)}},{key:"render",value:function render(){return html(_templateObject3(),this.closeButton?html(_templateObject4(),this.close,close):"")}},{key:"open",value:function open(){this.opened=!0}},{key:"_handleOutsideClick",value:function _handleOutsideClick(a){"EE-DRAWER"===a.target.nodeName&&this.close()}},{key:"close",value:function(){this.opened=!1}}]),b}(ThemeableMixin("ee-drawer")(StyleableMixin(LitElement)));customElements.define("ee-drawer",EeDrawer);export{EeDrawer};