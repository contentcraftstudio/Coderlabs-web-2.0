export function Dom() {
  if (process.browser) {
    return document.querySelector("body");
  }
}
