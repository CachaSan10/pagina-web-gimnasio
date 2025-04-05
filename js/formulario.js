document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('confirmationModal');
    const closeButton = document.querySelector('.close-button');
    const submitButton = document.querySelector('.submit-button');
    const spinnerContainer = document.querySelector('.spinner-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío tradicional

        if (form.checkValidity()) {
            // Simular envío (puedes reemplazar con tu lógica de AJAX)
            submitButton.classList.add('loading');
            spinnerContainer.style.display = 'flex';

            setTimeout(function() {
                submitButton.classList.remove('loading');
                spinnerContainer.style.display = 'none';
                modal.style.display = 'block';
                form.reset(); // Limpiar el formulario
            }, 1500); // Simulación de 1.5 segundos de carga
        } else {
            // Los mensajes de validación ya se muestran con CSS
        }
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});