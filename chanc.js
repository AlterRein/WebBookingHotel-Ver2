//logika membuat tombol login bisa di klik dan mengarahkan ke halaman main.html
document.getElementById("LoginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        window.location.href = "main.html";
    } else {
        alert("Username atau password salah!");
    }
});


