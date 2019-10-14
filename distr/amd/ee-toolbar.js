define(["exports","./lit-element-34339bae","./StyleableMixin-9aebdd05","./ThemeableMixin-c1113bda"],function(a,b,c,d){'use strict';function e(){var a=b._taggedTemplateLiteral(["\n        :host {\n          display: flex;\n          width: 100%;\n          align-items: center;\n          position: relative;\n          height: 64px;\n          padding: 0 5px;\n          pointer-events: none;\n          font-size: var(--toolbar-font-size, 20px);\n        }\n\n        :host ::slotted(*) {\n          pointer-events: auto;\n        }\n\n        :host ::slotted(.icon) {\n          font-size: 0;\n        }\n\n        :host ::slotted([title]) {\n          pointer-events: none;\n          display: flex;\n          margin: auto\n        }\n\n        :host ::slotted([bottom-item]) {\n          position: absolute;\n          right: 0;\n          bottom: 0;\n          left: 0;\n        }\n\n        :host ::slotted([top-item]) {\n          position: absolute;\n          top: 0;\n          right: 0;\n          left: 0;\n        }\n\n        :host ::slotted([spacer]) {\n          margin-left: 64px;\n        }\n      "]);return e=function(){return a},a}function f(){var a=b._taggedTemplateLiteral(["\n      <slot></slot>\n    "]);return f=function(){return a},a}var g=/*#__PURE__*/function(a){function c(){return b._classCallCheck(this,c),b._possibleConstructorReturn(this,b._getPrototypeOf(c).apply(this,arguments))}return b._inherits(c,a),b._createClass(c,[{key:"render",value:function(){return b.html(f())}}],[{key:"styles",get:function(){return[b._get(b._getPrototypeOf(c),"styles",this)||[],b.css(e())]}}]),c}(d.ThemeableMixin("ee-toolbar")(c.StyleableMixin(b.LitElement)));customElements.define("ee-toolbar",g),a.EeToolbar=g,Object.defineProperty(a,"__esModule",{value:!0})});
