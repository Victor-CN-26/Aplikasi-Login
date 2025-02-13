/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/*input alamat email dan password */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* menerima dan mencocokkan email dan password yang di input*/
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/*fungsi tombol login dengan submit*/
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /*memasukkan data email dan password yang sudah di input*/
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  /*kondisi, jika berhasil maka akan di arahkan ke halaman home*/
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {

    /*jika tidak berhasil maka akan keluar output inputan salah*/
    showPopUp();
  }
});
