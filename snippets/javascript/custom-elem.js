customElements.define('|', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).innerHTML = `
      <style></style>
      <div></div>
    `
  }
  connectedCallback() {
  }
  disconnectedCallback() {
  }
});
