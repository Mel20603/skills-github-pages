// Función para validar la contraseña y almacenarla en el navegador
function checkPassword() {
    var pass = document.getElementById("password").value;
    if (pass === "m2t_dev") {
        localStorage.setItem("accesoPermitido", "true"); // Guarda el acceso
        window.location.href = "home.html"; // Redirige a home.html
    } else {
        document.getElementById("error").textContent = "Contraseña incorrecta";
    }
}

// Función para verificar si el usuario tiene acceso al abrir home.html
function verificarAcceso() {
    if (localStorage.getItem("accesoPermitido") !== "true") {
        alert("Acceso denegado. Ingresa la contraseña primero.");
        window.location.href = "index.html"; // Redirige de vuelta al login
    }
}