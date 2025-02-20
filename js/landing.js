document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.getElementById("subscribe-form");
    const loginBtn = document.getElementById("login-btn");

    // Verifica se o usuário já está inscrito
    if (localStorage.getItem("usuarioInscrito")) {
        window.location.href = "index.html"; // Redireciona automaticamente
    }

    // Captura o evento de envio do formulário de inscrição
    subscribeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Salva o e-mail no Local Storage
        const email = document.getElementById("email").value;
        localStorage.setItem("usuarioInscrito", email);

        // Redireciona para a página inicial
        window.location.href = "index.html";
    });

    // Simulação de Login
    loginBtn.addEventListener("click", function () {
        localStorage.setItem("usuarioInscrito", "logado");
        window.location.href = "index.html";
    });
});
