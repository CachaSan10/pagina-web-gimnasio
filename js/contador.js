document.addEventListener('DOMContentLoaded', function() {
    // Configuración para el observador de intersección
    const options = {
        threshold: 0.5 // Se dispara cuando el 50% del elemento es visible
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const target = parseInt(statNumber.getAttribute('data-target'));
                const duration = 2000; // Duración en ms
                const start = 0;
                const increment = target / (duration / 16); // 60fps
                
                let current = start;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        clearInterval(timer);
                        current = target;
                    }
                    statNumber.textContent = Math.floor(current);
                }, 16);
                
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Observar todas las tarjetas de estadísticas
    document.querySelectorAll('.stat-card').forEach(card => {
        observer.observe(card);
    });
});