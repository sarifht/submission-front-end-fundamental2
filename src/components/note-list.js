class noteList extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = [];

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  set note(value) {
    this._note = value;
    this.render();
  }

  get note() {
    return this._note;
  }

  _updateStyle() {
    this._style.textContent = `
    :host {
      display: block;
    }
    
    * {
      font-family: "Nunito", sans-serif;
    }
    
    .grid-wrapper {
      padding-top: 5%;
      display: grid;
    }

    .grid-wrapper .all-notes {
      padding-top: 1em;
      text-align: center;
    }

    hr {
      width: 90%;
      border: 1.8px solid #ffb200;
    }
      
    .grid-wrapper .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      align-items: center;
      justify-items: center;
      gap: 2em;
      padding: 2em;
    }
        
    .grid-container .card-note {
      background-color: white;
      opacity: 0.8;
      border: none;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      width: 90%;
      padding: 1em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: max-height 1s ease-out;
      overflow: hidden;
      max-height: 200px; /* Set a fixed max-height for non-hover state */
    }
    
    .card-note:hover {
      max-height: none; /* Allow the card to expand fully on hover */
    }

    .card-note h4 {
      font-size: 1.2em;
      margin-bottom: 0.2em;
    }
    
    .card-note .date {
      font-size: 0.7em;
      padding-top: 0;
    }
        
    .card-note .desc {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-top: 0.4em;
      font-size: 1em;
      max-height: 4.5em; /* Untuk tiga baris */
      transition: max-height 0.3s ease, overflow 0.3s ease;
    }

    .card-note:hover .desc {
      -webkit-line-clamp: unset; /* Menghapus batas baris */
      max-height: none; /* Mengizinkan teks berkembang sepenuhnya */
      overflow: visible; /* Teks lengkap ditampilkan */
    }

    .card-note .note-delete {
      padding-top: 1em;
    }

    .note-delete .button-delete {
      background-color: #991b1b;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px;
      cursor: pointer;
    }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `

    <!-- Wrapper utama untuk grid -->
    <div class="grid-wrapper">

    <!-- Judul halaman -->
    <h1 class="all-notes">Semua Catatan</h1>
    <hr>

    <!-- Kontainer untuk card catatan -->
    <div class="grid-container">

    <!-- Iterasi melalui array catatan dan menampilkan setiap catatan -->
    ${this._note
      .map(
        (note) => `
    <div class="card-note">
      <!-- Judul catatan -->
      <h4>${note.title}</h4>
                    
      <!-- Tanggal pembuatan catatan -->
      <p class="date">
        ${new Date(note.createdAt).toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}, - ${new Date(note.createdAt).toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
                    
      <!-- Deskripsi catatan -->
      <p class="desc">${note.body.length > 120 ? note.body.substring(0, 119) + "..." : note.body}</p>

      <!-- Bagian untuk tombol hapus catatan -->
      <div class="note-delete">
      <button class="button-delete" type="button" data-id="${note.id}">Hapus</button>
      </div>
    </div>
    `,
      )
      .join("")}

    </div>
    </div>

    `;
  }
}

customElements.define("note-list", noteList);
