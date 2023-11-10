export async function loadGlobalStyles() {
  const response = await fetch("css/index.css");
  const css = await response.text();
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(css);
  return sheet;
}
