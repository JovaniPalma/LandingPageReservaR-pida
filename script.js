// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Envío del formulario de contacto
document.getElementById('formContacto').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('mensajeEnviado').classList.remove('hidden');
  this.reset();
});