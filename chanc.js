//logika membuat tombol login bisa di klik dan mengarahkan ke halaman main.html
document.getElementById("LoginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //ambil data user dari localStorage
    const registeredUser = localStorage.getItem('savedUsername');
    const registeredPass = localStorage.getItem('savedPassword');
    
    if (!registerUser) {
        alert("Akun tidak valid, silahkan registrasi lebih dulu.")
        window.location.href = "regis.html";
        return;
    }

    if (usernameInput === registeredUser && passwordInput === registeredPass) {
        alert("Login berhasil!")
        window.location.href = "main.html"
    } else {
        alert("Username atau Password salah!")
    }
});
