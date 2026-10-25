// Logika tempat registrasi user baru
document.getElementById("RegistrasiForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    //simpan data user ke localStorage
    localStorage.setItem("savedUsername", username);
    localStorage.setItem("savedPassword", password);

    alert("Registrasi Berhasil! Silakan login dengan akun Anda.");
    window.location.href = "index.html";
});