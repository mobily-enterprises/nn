function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _templateObject2(){var a=_taggedTemplateLiteral(["\n        :host {\n          display: block;\n          position: fixed;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          padding: 12px;\n          background-color: var(--app-primary-color);\n          color: var(--app-light-text-color);\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n          text-align: center;\n          will-change: transform;\n          transform: translate3d(0, 100%, 0);\n          transition-property: visibility, transform;\n          transition-duration: 0.2s;\n          visibility: hidden;\n        }\n\n        :host([active]) {\n          visibility: visible;\n          transform: translate3d(0, 0, 0);\n        }\n\n        :host([theme=\"success\"]) {\n          background-color: green;\n          color: white;\n        }\n\n        :host([theme=\"info\"]) {\n          background-color: gray;\n          color: white;\n        }\n\n        :host([theme=\"error\"]) {\n          background-color: red;\n          color: white;\n        }\n        @media (min-width: 460px) {\n          :host {\n            width: 320px;\n            margin: auto;\n          }\n        }\n      "]);return _templateObject2=function(){return a},a}function _templateObject(){var a=_taggedTemplateLiteral(["\n      ","\n    "]);return _templateObject=function(){return a},a}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _get(a,b,c){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(a,b,c){var d=_superPropBase(a,b);if(d){var e=Object.getOwnPropertyDescriptor(d,b);return e.get?e.get.call(c):e.value}},_get(a,b,c||a)}function _superPropBase(a,b){for(;!Object.prototype.hasOwnProperty.call(a,b)&&(a=_getPrototypeOf(a),null!==a););return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}import{L as LitElement,c as css,h as html}from"./lit-element-97ae09cb.js";import{S as StyleableMixin}from"./StyleableMixin-6a125586.js";import{T as ThemeableMixin}from"./ThemeableMixin-af62e1ed.js";var EeSnackBar=/*#__PURE__*/function(a){function b(){var a;return _classCallCheck(this,b),a=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this)),a.active=!1,a.boundEventListener=a._eventListener.bind(_assertThisInitialized(a)),a.intervalId=null,a}return _inherits(b,a),_createClass(b,[{key:"render",value:function render(){return html(_templateObject(),this.message)}},{key:"_eventListener",value:function _eventListener(a){var b=a.detail.theme||"info";this.setAttribute("theme",b),this.message=a.detail.message,this.show()}},{key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(b.prototype),"connectedCallback",this).call(this),document.addEventListener("snack-bar",this.boundEventListener)}},{key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(b.prototype),"disconnectedCallBack",this).call(this),document.removeEventListener("snack-bar",this.boundEventListener)}}],[{key:"styles",get:function get(){return[css(_templateObject2())]}},{key:"properties",get:function get(){return{active:{type:Boolean,reflect:!0},message:{type:String}}}}]),_createClass(b,[{key:"show",value:function show(){var a=this;this.active=!0,this.intervalId&&clearInterval(this.intervalId),this.intervalId=setInterval(function(){a.active=!1},3e3)}}]),b}(ThemeableMixin("ee-snack-bar")(StyleableMixin(LitElement)));window.customElements.define("ee-snack-bar",EeSnackBar);