define(["exports","./lit-element-34339bae","./StyleableMixin-9aebdd05","./ThemeableMixin-c1113bda"],function(a,b,c,d){'use strict';function e(){var a=b._taggedTemplateLiteral(["\n        :host {\n          position: relative;\n          display: inline-block;\n          font-size: 0.9em;\n        }\n      "]);return e=function(){return a},a}function f(){var a=b._taggedTemplateLiteral(["\n      ","\n      <slot></slot>\n    "]);return f=function(){return a},a}function g(){var a=b._taggedTemplateLiteral(["\n    <li>","</li>\n    "]);return g=function(){return a},a}function h(){var a=b._taggedTemplateLiteral(["\n        :host {\n          display: block;\n          padding: 10px;\n          border-bottom: 1px solid #ddd;\n        }\n\n        :host(:last-child) {\n          border-bottom: unset;\n        }\n\n        :host(:hover) {\n          background-color: #eee;\n        }\n\n        li {\n          list-style: none;\n        }\n\n      "]);return h=function(){return a},a}var i=/*#__PURE__*/function(a){function c(){var a;return b._classCallCheck(this,c),a=b._possibleConstructorReturn(this,b._getPrototypeOf(c).call(this)),a.config={id:"id",emailName:"name",emailAddress:"email"},a}return b._inherits(c,a),b._createClass(c,null,[{key:"styles",get:function(){return[b._get(b._getPrototypeOf(c),"styles",this)||[],b.css(h())]}},{key:"properties",get:function(){return{data:{type:Object,attribute:!1},config:{type:Object,attribute:!1}}}}]),b._createClass(c,[{key:"render",value:function(){return b.html(g(),this.textValue)}/* API */},{key:"_textValueGetter",value:function(){var a=!!(0<arguments.length&&void 0!==arguments[0])&&arguments[0];if(a)return this.data[this.config.emailName]||this.data[this.config.emailAddress];var b=this.data[this.config.emailName],c=this.data[this.config.emailAddress];return b&&c?"".concat(b," <").concat(c,">"):b?b:c?c:""}},{key:"stringToData",value:function(a){var c,d,e;if(!a.match("@")){var f;return f={},b._defineProperty(f,this.config.emailName,a),b._defineProperty(f,this.config.emailAddress,""),b._defineProperty(f,"valid",!1),f}var g=a.match(/[^@<\s]+@[^@\s>]+/g);g&&(e=g[0]);var h=a.split(/\s+/);1<h.length&&(h.pop(),d=h.join(" ").replace(/"/g,""));var i=!!e;return c={},b._defineProperty(c,this.config.emailName,d),b._defineProperty(c,this.config.emailAddress,e),b._defineProperty(c,"valid",i),c}},{key:"idValue",get:function(){return this.data[this.config.id]}},{key:"textValue",get:function(){return this._textValueGetter()}}],[{key:"PickedElement",get:function(){return j}}]),c}(d.ThemeableMixin("ee-autocomplete-item-email")(c.StyleableMixin(b.LitElement)));customElements.define("ee-autocomplete-item-email",i);var j=/*#__PURE__*/function(a){function c(){return b._classCallCheck(this,c),b._possibleConstructorReturn(this,b._getPrototypeOf(c).apply(this,arguments))}return b._inherits(c,a),b._createClass(c,[{key:"render",value:function(){return b.html(f(),this._textValueGetter(!0))}}],[{key:"styles",get:function(){return[b.css(e())]}}]),c}(d.ThemeableMixin("ee-autocomplete-item-email-view")(i));customElements.define("ee-autocomplete-item-email-view",j),a.EeAutocompleteItemEmail=i,Object.defineProperty(a,"__esModule",{value:!0})});