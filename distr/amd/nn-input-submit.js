define(["./lit-element-34339bae","./ThemeableMixin-c1113bda","./NativeReflectorMixin-ee6c4eac","./InputMixin-b647d651","./FormElementMixin-b76da3d3"],function(a,b,c,d,e){'use strict';function f(){var b=a._taggedTemplateLiteral(["\n      ","\n      <input @click=\"","\" type=\"submit\" id=\"native\">\n    "]);return f=function(){return b},b}var g=/*#__PURE__*/function(b){function c(){return a._classCallCheck(this,c),a._possibleConstructorReturn(this,a._getPrototypeOf(c).apply(this,arguments))}return a._inherits(c,b),a._createClass(c,[{key:"render",value:function(){return a.html(f(),this.customStyle,this._formSubmit)}},{key:"_formSubmit",value:function(){this.form&&this.form.submit()}}]),c}(b.ThemeableMixin("nn-input-submit")(e.FormElementMixin(d.InputMixin(c.NativeReflectorMixin(a.LitElement)))));customElements.define("nn-input-submit",g)});
