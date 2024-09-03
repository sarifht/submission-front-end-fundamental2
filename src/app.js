// Mengimpor file CSS dan komponen yang diperlukan
import "./style/style.css";
import "./components/index.js";

// Mendefinisikan URL dasar untuk API
const baseUrl = "https://notes-api.dicoding.dev/v2";

// Fungsi untuk menampilkan indikator loading
const showLoadingIndicator = () => {
  const loadingIndicator = document.querySelector(".loadingIndicator");
  if (loadingIndicator) {
    loadingIndicator.style.display = "flex";
  }
};

// Fungsi untuk menyembunyikan indikator loading
const hideLoadingIndicator = () => {
  const loadingIndicator = document.querySelector(".loadingIndicator");
  if (loadingIndicator) {
    loadingIndicator.style.display = "none";
  }
};

// Fungsi untuk mengambil catatan dari API
const getNote = () => {
  showLoadingIndicator(); // Tampilkan loading saat mengambil data
  fetch(`${baseUrl}/notes`)
    .then((response) => response.json())
    .then((responseJson) => {
      setTimeout(() => {
        // Menunggu 2 detik sebelum menyembunyikan loading
        hideLoadingIndicator(); // Sembunyikan loading setelah data didapatkan
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderNotes(responseJson.data);
        }
      }, 1000); // Durasi 1 detik
    })
    .catch((error) => {
      hideLoadingIndicator(); // Sembunyikan loading jika ada error
      showResponseMessage(error);
    });
};

// Fungsi untuk menambahkan catatan baru ke API
const addNote = (note) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Catatan Berhasil Ditambahkan",
    showConfirmButton: false,
    timer: 2000,
  }).then(() => {
    showLoadingIndicator(); // Tampilkan loading setelah SweetAlert ditutup
    fetch(`${baseUrl}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "12345",
      },
      body: JSON.stringify({ title: note.title, body: note.body }),
    })
      .then(() => {
        setTimeout(() => {
          hideLoadingIndicator(); // Sembunyikan loading setelah 1.4 detik
          getNote();
        }, 1000); // Durasi 1 detik
      })
      .catch((error) => {
        hideLoadingIndicator(); // Sembunyikan loading jika ada error
        showResponseMessage(error);
      });
  });
};

// Fungsi untuk menghapus catatan dari API
const removeNote = (noteId) => {
  Swal.fire({
    title: "Kamu Yakin?",
    text: "Ingin menghapus catatan ini",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#991b1b",
    cancelButtonColor: "#94a3b8",
    confirmButtonText: "Hapus Catatan Ini",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Catatan Berhasil Dihapus",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        showLoadingIndicator(); // Tampilkan loading setelah SweetAlert ditutup
        fetch(`${baseUrl}/notes/${noteId}`, {
          method: "DELETE",
          headers: {
            "X-Auth-Token": "12345",
          },
        })
          .then(() => {
            setTimeout(() => {
              hideLoadingIndicator(); // Sembunyikan loading setelah 1 detik
              getNote();
            }, 1000); // Durasi 1 detik
          })
          .catch((error) => {
            hideLoadingIndicator(); // Sembunyikan loading jika ada error
            showResponseMessage(error);
          });
      });
    } else {
      Swal.fire({
        title: "Tidak Jadi",
        text: "Catatanmu batal dihapus",
        icon: "info",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  });
};

// Fungsi untuk menampilkan catatan ke dalam DOM
const renderNotes = (notes) => {
  const noteItems = document.querySelectorAll("note-list");
  noteItems.forEach((noteItem) => {
    noteItem.note = notes;
    const shadowRoot = noteItem.shadowRoot;
    const cardNotes = shadowRoot.querySelectorAll(".note-delete");
    cardNotes.forEach((cardNote) => {
      const deleteButton = cardNote.querySelector(".button-delete");
      if (deleteButton) {
        deleteButton.addEventListener("click", (event) => {
          const noteId = event.target.dataset.id;
          removeNote(noteId);
        });
      }
    });
  });
};

// Fungsi yang akan dijalankan setelah DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  getNote();

  const inputNoteElement = document.querySelector("note-form");
  if (inputNoteElement) {
    inputNoteElement.addEventListener("note-added", (event) => {
      const newNote = event.detail;
      addNote(newNote);
    });
  }
});

// Fungsi untuk menampilkan pesan respon (error/sukses) menggunakan SweetAlert2
const showResponseMessage = (message) => {
  Swal.fire({
    title: "Terjadi Kesalahan",
    text: message,
    icon: "error",
  });
};
