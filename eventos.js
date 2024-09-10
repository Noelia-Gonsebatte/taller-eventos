//div
document.querySelector('.boton').addEventListener('click', function(event) {
    // Verificar si el clic fue directamente en el div y no en un elemento hijo
    if (event.target === this) {
        alert('Hola! Soy el div');
    }
});
