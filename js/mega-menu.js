// Opcional: Puedes agregar JavaScript para funcionalidades más complejas
  // como cerrar el mega-menú al hacer clic fuera de él.
  document.addEventListener('click', function(event) {
    const megaMenus = document.querySelectorAll('.mega-menu');
    megaMenus.forEach(menu => {
      if (!menu.parentNode.contains(event.target)) {
        menu.style.display = 'none';
      }
    });
  });