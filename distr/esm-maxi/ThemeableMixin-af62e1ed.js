const ThemeableMixin = (path) => (base) => {
  const common = (window.TP_THEME && window.TP_THEME.common) || (p => p);
  const theme = (window.TP_THEME && window.TP_THEME[path]) || (p => p);
  return theme(common(base))
};export{ThemeableMixin as T};