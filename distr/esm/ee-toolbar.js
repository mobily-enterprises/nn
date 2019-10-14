function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _templateObject2(){var a=_taggedTemplateLiteral(["\n        :host {\n          display: flex;\n          width: 100%;\n          align-items: center;\n          position: relative;\n          height: 64px;\n          padding: 0 5px;\n          pointer-events: none;\n          font-size: var(--toolbar-font-size, 20px);\n        }\n\n        :host ::slotted(*) {\n          pointer-events: auto;\n        }\n\n        :host ::slotted(.icon) {\n          font-size: 0;\n        }\n\n        :host ::slotted([title]) {\n          pointer-events: none;\n          display: flex;\n          margin: auto\n        }\n\n        :host ::slotted([bottom-item]) {\n          position: absolute;\n          right: 0;\n          bottom: 0;\n          left: 0;\n        }\n\n        :host ::slotted([top-item]) {\n          position: absolute;\n          top: 0;\n          right: 0;\n          left: 0;\n        }\n\n        :host ::slotted([spacer]) {\n          margin-left: 64px;\n        }\n      "]);return _templateObject2=function(){return a},a}function _templateObject(){var a=_taggedTemplateLiteral(["\n      <slot></slot>\n    "]);return _templateObject=function(){return a},a}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _get(a,b,c){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(a,b,c){var d=_superPropBase(a,b);if(d){var e=Object.getOwnPropertyDescriptor(d,b);return e.get?e.get.call(c):e.value}},_get(a,b,c||a)}function _superPropBase(a,b){for(;!Object.prototype.hasOwnProperty.call(a,b)&&(a=_getPrototypeOf(a),null!==a););return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}import{L as LitElement,c as css,h as html}from"./lit-element-97ae09cb.js";import{S as StyleableMixin}from"./StyleableMixin-6a125586.js";import{T as ThemeableMixin}from"./ThemeableMixin-af62e1ed.js";var EeToolbar=/*#__PURE__*/function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,_getPrototypeOf(b).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"render",value:function render(){return html(_templateObject())}}],[{key:"styles",get:function get(){return[_get(_getPrototypeOf(b),"styles",this)||[],css(_templateObject2())]}}]),b}(ThemeableMixin("ee-toolbar")(StyleableMixin(LitElement)));customElements.define("ee-toolbar",EeToolbar);export{EeToolbar};