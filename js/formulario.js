document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Mostrar spinner
    const submitBtn = document.getElementById('submitBtn');
    const spinner = document.getElementById('spinner');
    const btnText = submitBtn.querySelector('.btn-text');
    
    btnText.textContent = 'Enviando...';
    spinner.style.display = 'block';
    submitBtn.disabled = true;
    
    // Simular envío (en un caso real sería una petición AJAX)
    setTimeout(() => {
        // Ocultar spinner
        spinner.style.display = 'none';
        btnText.textContent = 'Enviar Mensaje';
        submitBtn.disabled = false;
        
        // Mostrar modal
        document.getElementById('confirmationModal').style.display = 'flex';
        
        // Resetear formulario
        this.reset();
    }, 2000);
});

// Cerrar modal
document.getElementById('modalCloseBtn').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
});