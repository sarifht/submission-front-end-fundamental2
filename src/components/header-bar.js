// header-bar.js
class headerBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
            :host {
                display: block;
            }

            nav {
              display: flex;
              background-color: #005792;
              width: 100%;
              justify-content: center;
              padding: 16px;
              position: fixed;
              z-index: 1;

            }

            nav .title-app {
              color: white;
              font-size: 1em;
            }
        `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <nav>    
        <div class="title-app">
          <h1>Aplikasi Pencatatan Online</h1>
        </div>
      </nav>
    `;
  }
}

customElements.define("header-bar", headerBar);
