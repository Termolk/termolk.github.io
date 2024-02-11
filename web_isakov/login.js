document.getElementById('loginForm').addEventListener("submit", login)

function login(event) {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.login === login && user.password === password);

    if (user)
        alert("Добро пожаловать!");
    else
        alert('Данные введены неверно!')
}