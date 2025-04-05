document.addEventListener('DOMContentLoaded', function() {
    const filterLinks = document.querySelectorAll('.filter-nav a');
    const articles = document.querySelectorAll('.article');

    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const filter = this.getAttribute('data-filter');

            articles.forEach(article => {
                const tags = article.dataset.tags.split(' ');
                article.style.display = 'none'; // Ocultar todos

                if (filter === 'all' || tags.includes(filter)) {
                    article.style.display = 'grid'; // Mostrar los que coinciden
                }
            });
        });
    });

    // Efecto Scroll Reveal (Simple con JS)
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    function revealOnScroll() {
        scrollRevealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 50) { // Ajusta el valor para cuando quieres que aparezca
                element.classList.add('revealed');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Para mostrar elementos visibles al cargar la página
});