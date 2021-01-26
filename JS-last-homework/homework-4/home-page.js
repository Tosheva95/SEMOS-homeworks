const email = document.getElementById('email');
const username = document.getElementById('username');

const emailFromLocal = localStorage.getItem('email');
const usernameFromLocal = localStorage.getItem('username');


email.innerHTML = emailFromLocal;
username.innerHTML = usernameFromLocal;
