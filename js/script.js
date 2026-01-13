document.addEventListener("DOMContentLoaded", function () {
    
    // Função para fechar o menu mobile ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            // Verifica se o menu está aberto (visível) antes de tentar fechar
            if (menuToggle.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });

    console.log("Seja bem-vindo!");
});