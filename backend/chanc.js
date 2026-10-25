document.getElementById("LoginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const registeredUser = localStorage.getItem("savedUsername");
    const registeredPass = localStorage.getItem("savedPassword");

    if (!registeredUser) {
        alert("Akun tidak valid, silahkan registrasi lebih dulu.");
        window.location.href = "regis.html";
        return;
    }

    if (username === registeredUser && password === registeredPass) {
        alert("Login berhasil!");
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "main.html";
    } else {
        alert("Username atau Password salah!");
    }
});