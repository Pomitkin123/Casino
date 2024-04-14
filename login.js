document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Спрощене умовне входження, реальний сценарій має включати безпечніші методи перевірки
    if (username === "admin" && password === "password123") {
        alert('Успішний вхід!');
        // Перенаправлення користувача на головну сторінку або дашборд після успішної авторизації
        window.location.href = "Головна сторінка.html";
    } else {
        alert('Неправильне ім\'я користувача або пароль. Будь ласка, спробуйте знову.');
    }
});
