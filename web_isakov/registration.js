document.getElementById('regForm').addEventListener("submit", registration)

function registration(event) {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const tryPassword = document.getElementById('tryPassword').value;

    if (password !== tryPassword) {
        alert('Пароли не совпадают!');

    } else if (login === ''){
        alert('Введите логин!')
    } else {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ login: login, password: password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Вы успешно зарегистрировались!')
    }
}