document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const messageDiv = document.getElementById("message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Verifica las credenciales (usuario: "admin", contraseña: "password")
        if (username === "admin" && password === "password") {
            messageDiv.innerHTML = "Inicio de sesión exitoso. ¡Bienvenido, " + username + "!";
        } else {
            messageDiv.innerHTML = "Inicio de sesión fallido. Verifica tus credenciales.";
        }
    });
});
