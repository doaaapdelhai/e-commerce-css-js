// register.js

let regUsername = document.querySelector('#username');
let regEmail = document.querySelector('#email');
let regPassword = document.querySelector('#password');
let registerBtn = document.querySelector('#sign_up');

registerBtn.addEventListener('click', register);

function register(e) {
    e.preventDefault();
    if (regUsername.value === "" || regEmail.value === "" || regPassword.value === "") {
        alert("Please fill in all fields.");
    } else {
        // Save user data to local storage
        localStorage.setItem('username', regUsername.value);
        localStorage.setItem('email', regEmail.value);
        localStorage.setItem('password', regPassword.value);

        setTimeout(() => {
            window.location = 'login.html';
        }, 1500);
    }
}
