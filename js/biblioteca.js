// Interação com o botão "Ver tudo"
document.addEventListener('DOMContentLoaded', () => {
    const botaoVerTudo = document.querySelector('.btn-ver-tudo');

    botaoVerTudo.addEventListener('click', () => {
        alert('Em breve, exibiremos toda a nossa coleção de livros!');
    });

    // Mensagem de compra simulada
    const botoesComprar = document.querySelectorAll('.btn-comprar');
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', () => {
            const livro = botao.parentElement.querySelector('h3').textContent;
            alert(`📖 Você selecionou o livro "${livro}".`);
        });
    });
});
