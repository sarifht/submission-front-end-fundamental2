class noteForm extends HTMLElement {
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
    
    * {
      font-family: "Nunito", sans-serif;
    }

    .note-wrapper {
      display: flex;
      width: 100%;
      align-items: center;
      padding-top: 10%;
      flex-direction: column;
    }

    .note-form-wrapper {
      background-color: white;
      opacity: 0.8;
      border: none;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      justify-content: center;
      padding: 2em;
      width: 100%;
      max-width: 400px;
      margin: auto;
    }

    .form-title,
    .form-description {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-bottom: 1em;
    }

    .info-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 5px;
    }

    .error-message {
      color: #ef5a6f;
      font-size: 0.75rem;
      margin: 0;
      flex: 1;
      text-align: left;
    }

    .char-count {
      color: #666;
      font-size: 0.75rem;
      margin: 0;
      flex: 0;
      text-align: right;
    }

    #note-title,
    #note-description {
      padding-right: 3em;
    }

    .note-form-wrapper h1 {
      text-align: center;
      margin-bottom: 1em;
      font-weight: 700;
      font-size: 24px;
      width: 100%;
    }

    .note-form {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1em;
      width: 100%;
    }

    .note-form .form-title {
      width: 100%;
      margin-bottom: auto;
    }

    .note-form .form-title input {
      font-size: 1rem;
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      box-sizing: border-box;
    }

    .note-form .form-description {
      width: 100%;
    }

    .note-form .form-description textarea {
      font-size: 1rem;
      padding: 6px;
      width: 100%;
      height: 9rem;
      box-sizing: border-box;
    }

    .note-form .form-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .form-description {
      margin-bottom: 1em;
    }

    .note-form .form-group button {
      color: black;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.5rem;
      background-color: #ffb200;
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
      padding-left: 2rem;
      padding-right: 2rem;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;
      border: white;
      width: 100%;
      cursor: pointer;
    }

    .note-form .form-group button:hover {
      opacity: 0.8;
    }

    .note-form .form-group button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }


  @media screen and (max-width: 768px) {
    .wrapper {
        padding-top: 20%;
    }

    .wrapper .form-wrapper {
      width: 50%;
    }
  }

  @media screen and (max-width: 576px) {
    .wrapper {
        padding-top: 25%;
    }

    .note-wrapper {
      padding-top: 25%;
    }

    .note-form-wrapper {
      padding: 1em;
      max-width: 60%;
      align-items: center;
      justify-items: center;
    }

    .note-form .form-title input,
    .note-form .form-description textarea,
    .note-form .form-group button {
      font-size: 0.8rem; /* Mengurangi ukuran font lebih lanjut */
      padding: 6px;
    }
  }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();

    const titleInput = this._shadowRoot.querySelector("#note-title");
    const descriptionInput =
      this._shadowRoot.querySelector("#note-description");
    const submitButton = this._shadowRoot.querySelector(".btn-submit");

    const validateForm = () => {
      const isTitleValid =
        titleInput.value.length >= 5 && titleInput.value.length <= 30;
      const isDescriptionValid =
        descriptionInput.value.length >= 15 &&
        descriptionInput.value.length <= 120;
      submitButton.disabled = !(isTitleValid && isDescriptionValid);
    };

    titleInput.addEventListener("input", () => {
      this._updateTitleCharCount();
      this._validateTitle();
      validateForm();
    });

    descriptionInput.addEventListener("input", () => {
      this._updateDescriptionCharCount();
      this._validateDescription();
      validateForm();
    });

    validateForm(); // Disable button on initial load if invalid
  }

  _handleSubmit(event) {
    event.preventDefault();

    const titleInput = this._shadowRoot.querySelector("#note-title");
    const descriptionInput =
      this._shadowRoot.querySelector("#note-description");
    const titleError = this._shadowRoot.querySelector("#title-error");
    const descriptionError =
      this._shadowRoot.querySelector("#description-error");

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    const minTitleLength = 5;
    const minDescriptionLength = 15;

    titleError.textContent = "";
    descriptionError.textContent = "";

    let hasError = false;

    if (title.length < minTitleLength) {
      titleError.textContent = `Judul catatan harus memiliki minimal ${minTitleLength} karakter.`;
      hasError = true;
    } else if (title.length > 30) {
      titleError.textContent = `Judul catatan tidak boleh melebihi 30 karakter.`;
      hasError = true;
    }

    if (description.length < minDescriptionLength) {
      descriptionError.textContent = `Deskripsi catatan harus memiliki minimal ${minDescriptionLength} karakter.`;
      hasError = true;
    } else if (description.length > 120) {
      descriptionError.textContent = `Deskripsi catatan tidak boleh melebihi 120 karakter.`;
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const newNote = {
      id: `notes-${Math.random().toString(36).substring(2, 9)}`,
      title: title,
      body: description,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    this.dispatchEvent(new CustomEvent("note-added", { detail: newNote }));

    // Reset the form fields
    titleInput.value = "";
    descriptionInput.value = "";

    // Reset the char count
    const titleCharCount = this._shadowRoot.querySelector("#title-char-count");
    const descriptionCharCount = this._shadowRoot.querySelector(
      "#description-char-count",
    );

    titleCharCount.textContent = "0/30";
    descriptionCharCount.textContent = "0/120";
  }

  _updateTitleCharCount() {
    const titleInput = this._shadowRoot.querySelector("#note-title");
    const charCount = this._shadowRoot.querySelector("#title-char-count");
    charCount.textContent = `${titleInput.value.length}/30`;
  }

  _updateDescriptionCharCount() {
    const descriptionInput =
      this._shadowRoot.querySelector("#note-description");
    const charCount = this._shadowRoot.querySelector("#description-char-count");
    charCount.textContent = `${descriptionInput.value.length}/120`;
  }

  _validateTitle() {
    const titleInput = this._shadowRoot.querySelector("#note-title");
    const titleError = this._shadowRoot.querySelector("#title-error");

    if (titleInput.value.length < 5) {
      titleError.textContent = `Judul catatan harus memiliki minimal 5 karakter.`;
      titleError.style.display = "block";
    } else if (titleInput.value.length > 30) {
      titleError.textContent = `Judul catatan tidak boleh melebihi 30 karakter.`;
      titleError.style.display = "block";
    } else {
      titleError.textContent = "";
      titleError.style.display = "none";
    }
  }

  _validateDescription() {
    const descriptionInput =
      this._shadowRoot.querySelector("#note-description");
    const descriptionError =
      this._shadowRoot.querySelector("#description-error");

    if (descriptionInput.value.length < 15) {
      descriptionError.textContent = `Deskripsi catatan harus memiliki minimal 15 karakter.`;
      descriptionError.style.display = "block";
    } else if (descriptionInput.value.length > 120) {
      descriptionError.textContent = `Deskripsi catatan tidak boleh melebihi 120 karakter.`;
      descriptionError.style.display = "block";
    } else {
      descriptionError.textContent = "";
      descriptionError.style.display = "none";
    }
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);

    this._shadowRoot.innerHTML += `
    <div class="note-wrapper">
      <div class="note-form-wrapper">
        <h1>Menambahkan Catatan Baru</h1>
        <form class="note-form" id="note-form">
          <div class="form-title">
            <label for="note-title"></label>
            <input type="text" id="note-title" placeholder="Masukkan judul catatan" />
            <span class="info-group">
              <p id="title-error" class="error-message"></p>
              <span class="char-count" id="title-char-count">0/30</span>
            </span>
          </div>
          <div class="form-description">
            <label for="note-description"></label>
            <textarea id="note-description" placeholder="Masukkan deskripsi catatan"></textarea>
            <span class="info-group">
              <p id="description-error" class="error-message"></p>
              <span class="char-count" id="description-char-count">0/120</span>
            </span>
          </div>
          <div class="form-group">
            <button type="submit" class="btn-submit" disabled>Simpan Catatanku</button>
          </div>
        </form>
      </div>
    </div>
    `;

    this._shadowRoot
      .querySelector("form")
      .addEventListener("submit", this._handleSubmit.bind(this));
  }
}

customElements.define("note-form", noteForm);
