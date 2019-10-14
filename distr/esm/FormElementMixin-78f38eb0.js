function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _templateObject2(){var a=_taggedTemplateLiteral(["\n        <span class=\"error-message\">\n          ","\n        </span>\n      "]);return _templateObject2=function(){return a},a}function _templateObject(){var a=_taggedTemplateLiteral(["\n\n          span.error-message {\n            color: red;\n          }\n\n          :invalid {\n            background-color: pink;\n            border: var(--nn-input-border-invalid, 1px solid #bb7777);\n          }\n        "]);return _templateObject=function(){return a},a}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _get(a,b,c){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(a,b,c){var d=_superPropBase(a,b);if(d){var e=Object.getOwnPropertyDescriptor(d,b);return e.get?e.get.call(c):e.value}},_get(a,b,c||a)}function _superPropBase(a,b){for(;!Object.prototype.hasOwnProperty.call(a,b)&&(a=_getPrototypeOf(a),null!==a););return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}import{c as css,h as html}from"./lit-element-97ae09cb.js";var FormElementMixin=function(a){return(/*#__PURE__*/function(a){function b(){var a;return _classCallCheck(this,b),a=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this)),a.validator=function(){return""},a.nativeValidationKeys=["badInput","customError","patternMismatch","rangeOverflow","rangeUnderflow","stepMismatch","valueMissing","tooLong","tooShort","typeMismatch"],a.validationMessages={},a.validationMessagePosition="before",a._boundKeyEventListener=a._eventListener.bind(_assertThisInitialized(a)),a._showPrettyError=!1,a}return _inherits(b,a),_createClass(b,[{key:"_eventListener",// Submit on enter with forms with only one element
value:function _eventListener(a){13===a.keyCode&&1===_toConsumableArray(this.form.elements).length&&this.form.submit()}},{key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(b.prototype),"connectedCallback",this).call(this),this.assignFormProperty(),this.addEventListener("keydown",this._boundKeyEventListener)}},{key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(b.prototype),"disconnectedCallBack",this).call(this),this.removeEventListener("keydown",this._boundKeyEventListener)}},{key:"reflectProperties",get:function get(){return _get(_getPrototypeOf(b.prototype),"reflectProperties",this).filter(function(a){return"checkValidity"!==a&&"reportValidity"!==a&&"setCustomValidity"!==a})}}],[{key:"properties",get:function get(){return{nativeErrorMessages:{type:Boolean,attribute:"native-error-messages"},shownValidationMessage:{type:String,attribute:!1},validator:{type:Function},validationMessages:{type:Object,attribute:"validition-messages"},validationMessagePosition:{type:String,attribute:"validation-message-position"}}}},{key:"styles",get:function get(){return[_get(_getPrototypeOf(b),"styles",this)||[],css(_templateObject())]}}]),_createClass(b,[{key:"assignFormProperty",value:function assignFormProperty(){if("NN-FORM"!==this.tagName&&"EN-FORM"!==this.tagName){for(var a=this;(a=a.parentElement)&&"FORM"!==a.tagName&&"NN-FORM"!==a.tagName&&"EN-FORM"!==a.tagName;);// eslint-disable-line no-empty
this.form=el}}},{key:"setCustomValidity",value:function setCustomValidity(a){return this.native.setCustomValidity(a)}},{key:"reportValidity",value:function reportValidity(){// Run custom validator. Note that custom validator
// will only ever run on filed without an existing customError.
// This is because
if(!this.native.validity.customError){var a=this.validator();a&&this.setCustomValidity(a)}// Hide the fancy error message by default
// Run reportValidity which will display the native
// error messages.
// Suppress the pretty error messages
return this.shownValidationMessage="",this.nativeErrorMessages?(this._showPrettyError=!1,this.native.reportValidity()):(this._showPrettyError=!0,this.native.checkValidity())}},{key:"checkValidity",value:function checkValidity(){if(!this.native.validity.customError){var a=this.validator();a&&this.setCustomValidity(a)}return this._showPrettyError=!1,this.native.checkValidity()}},{key:"firstUpdated",value:function firstUpdated(){var a=this;_get(_getPrototypeOf(b.prototype),"firstUpdated",this).call(this),this.native.oninput=function(){a.setCustomValidity(""),a.reportValidity()},this.native.oninvalid=function(b){// No pretty error to be shown (probably running checkValidity())
if(a._showPrettyError){var c,d=b.target.validity,e=!0,f=!1,g=void 0;// Find which one flag in validity is raised
try{for(var h,i,j=a.nativeValidationKeys[Symbol.iterator]();!(e=(h=j.next()).done);e=!0)if(i=h.value,d[i]){c=i;break}// Assign shownValidationMessage
// Allow translating with specific function
}catch(a){f=!0,g=a}finally{try{e||null==j["return"]||j["return"]()}finally{if(f)throw g}}var l=a.validationMessages[c];a.shownValidationMessage=l?"function"==typeof l?l(b.target.validationMessage):l:b.target.validationMessage}}}},{key:"skipAttributes",get:function get(){return[].concat(_toConsumableArray(_get(_getPrototypeOf(b.prototype),"skipAttributes",this)),["form"])}},{key:"validationMessageTemplate",get:function get(){return html(_templateObject2(),this.shownValidationMessage)}},{key:"ifValidationMessageBefore",get:function get(){return"after"===this.validationMessagePosition?"":this.validationMessageTemplate}},{key:"ifValidationMessageAfter",get:function get(){return"before"===this.validationMessagePosition?"":this.validationMessageTemplate}}]),b}(a))};export{FormElementMixin as F};