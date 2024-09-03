class footerBar extends HTMLElement {
  _shadowRoot = null;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.emptyContent();

    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "src/style/style.css");

    this._shadowRoot.appendChild(link);
    this._shadowRoot.innerHTML += `
       <footer-bar>
            <p>&copy; 2024 - Aplikasi Pencatatan Online oleh Sarif Hidayatullah</p>
       </footer-bar>
       `;
  }
}

customElements.define("footer-bar", footerBar);
