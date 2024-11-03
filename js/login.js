// login.js

let username = document.querySelector('#username');
let password = document.querySelector('#password');
let loginBtn = document.querySelector('#sign_in');

// Fetch user data from local storage
let getUser = localStorage.getItem('username');
let getPassword = localStorage.getItem('password');

loginBtn.addEventListener('click', login);

function login(e) {
    e.preventDefault();
    if (username.value === "" || password.value === "") {
        alert("Please fill in all fields.");
    } else {
        if (getUser && getUser.trim() === username.value.trim() && getPassword === password.value.trim()) {
            // Save login status
            localStorage.setItem('loggedInUser', username.value);

            setTimeout(() => {
                window.location = 'index.html';
            }, 1500);
        } else {
            alert('Username or password is incorrect.');
        }
    }
}
