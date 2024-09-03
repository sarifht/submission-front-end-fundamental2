// Mengimpor file CSS dan komponen yang diperlukan
import "./style/style.css";
import "./components/index.js";
import { animate, glide } from "motion"; // Mengimpor fungsi animasi dari library 'motion'

// Mendefinisikan URL dasar untuk API
const baseUrl = "https://notes-api.dicoding.dev/v2";

// Fungsi untuk mengambil catatan dari API
const getNote = () => {
  fetch(`${baseUrl}/notes`)
    .then((response) => {
      return response.json(); // Mengubah respon menjadi format JSON
    })
    .then((responseJson) => {
      if (responseJson.error) {
        showResponseMessage(responseJson.message); // Menampilkan pesan error jika ada
      } else {
        console.log(responseJson.data);
        renderNotes(responseJson.data); // Memanggil fungsi untuk menampilkan catatan
      }
    })
    .catch((error) => {
      showResponseMessage(error); // Menampilkan pesan error jika terjadi kesalahan
    });
};

// Fungsi untuk menambahkan catatan baru ke API
const addNote = (note) => {
  showLoadingIndicator(); // Menampilkan indikator loading
  fetch(`${baseUrl}/notes`, {
    method: "POST", // Menggunakan metode POST untuk menambah data
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": "12345", // Token autentikasi
    },
    body: JSON.stringify({ title: note.title, body: note.body }), // Mengirim data catatan dalam format JSON
  });
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Catatan Berhasil Ditambahkan", // Menampilkan pesan sukses menggunakan SweetAlert2
    showConfirmButton: false,
    timer: 2000,
  })
    .then((responseJson) => {
      hideLoadingIndicator(); // Menyembunyikan indikator loading
      getNote(); // Mengambil catatan terbaru setelah menambahkan
    })
    .catch((error) => {
      hideLoadingIndicator(); // Menyembunyikan indikator loading jika terjadi kesalahan
      showResponseMessage(error); // Menampilkan pesan error
    });
};

// Fungsi untuk menghapus catatan dari API
const removeNote = (noteId) => {
  Swal.fire({
    title: "Kamu Yakin?",
    text: "Ingin menghapus catatan ini",
    icon: "warning",
    showCancelButton: true, // Tampilkan tombol Cancel
    confirmButtonColor: "#991b1b",
    cancelButtonColor: "#94a3b8",
    confirmButtonText: "Hapus Catatan Ini",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      // Jika pengguna mengkonfirmasi
      // Lakukan request DELETE hanya jika tombol "Yes" ditekan
      fetch(`${baseUrl}/notes/${noteId}`, {
        method: "DELETE", // Menggunakan metode DELETE untuk menghapus data
        headers: {
          "X-Auth-Token": "12345", // Token autentikasi
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          Swal.fire({
            title: "Terhapus",
            text: "Catatanmu berhasil dihapus!", // Menampilkan pesan sukses penghapusan menggunakan SweetAlert2
            icon: "success",
          });
          getNote(); // Mengambil catatan terbaru setelah menghapus
        })
        .catch((error) => {
          hideLoadingIndicator(); // Menyembunyikan indikator loading jika terjadi kesalahan
          showResponseMessage(error); // Menampilkan pesan error
        });
    } else {
      // Jika pengguna menekan tombol Cancel, tidak lakukan apapun
      Swal.fire({
        title: "Tidak Jadi",
        text: "Catatanmu batal dihapus",
        icon: "info",
      });
    }
  });
};

// Fungsi untuk menampilkan catatan ke dalam DOM
const renderNotes = (notes) => {
  const noteItems = document.querySelectorAll("note-list"); // Mengambil elemen yang menampung daftar catatan
  noteItems.innerHTML = ""; // Mengosongkan isi elemen

  noteItems.forEach((noteItem) => {
    noteItem.note = notes; // Menghubungkan data catatan ke elemen 'note-list'
    const shadowRoot = noteItem.shadowRoot; // Mengakses shadow root dari elemen

    const cardNotes = shadowRoot.querySelectorAll(".note-delete");
    cardNotes.forEach((cardNote) => {
      const deleteButton = cardNote.querySelector(".button-delete"); // Mengambil tombol delete
      if (deleteButton) {
        deleteButton.addEventListener("click", (event) => {
          const noteId = event.target.dataset.id; // Mengambil ID catatan yang akan dihapus

          removeNote(noteId); // Memanggil fungsi untuk menghapus catatan
        });
      }
    });
  });
};

// Fungsi untuk menampilkan pesan respon (error/sukses) menggunakan SweetAlert2
const showResponseMessage = (message) => {
  Swal.fire({
    title: "Internet Kamu Bermasalah?",
    text: "Silahkan coba hubungkan ulang", // Menampilkan pesan menggunakan SweetAlert2
    icon: "question",
  });
  showResponseMessage(message); // Menampilkan pesan tambahan dari argumen
};

// Fungsi yang akan dijalankan setelah DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  getNote(); // Memanggil fungsi untuk mengambil catatan

  const inputNoteElement = document.querySelector("note-form"); // Mengambil elemen form catatan
  if (inputNoteElement) {
    inputNoteElement.addEventListener("note-added", (event) => {
      const newNote = event.detail; // Mendapatkan detail catatan baru dari event
      addNote(newNote); // Memanggil fungsi untuk menambahkan catatan baru
    });
  }
});

// Fungsi untuk menampilkan indikator loading
const showLoadingIndicator = () => {
  const loadingIndicator = document.querySelector(".loadingIndicator");
  loadingIndicator.style.display = "flex"; // Menampilkan indikator loading
};

// Fungsi untuk menyembunyikan indikator loading
const hideLoadingIndicator = () => {
  const loadingIndicator = document.querySelector(".loadingIndicator");
  loadingIndicator.style.display = "none"; // Menyembunyikan indikator loading
};

// Animasi untuk item catatan menggunakan library 'motion'
animate("#itemNotes", { y: 0 }, { easing: glide({ velocity: -50 }) });
