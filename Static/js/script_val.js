document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario-contacto');

    form.addEventListener('submit', (event) => {
        // Verificar que algun radio button esté seleccionado
        const radioButtons = form.elements['tipo_contacto'];
        let radioSelected = false;

        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                radioSelected = true;
                break;
            }
        }

        // Verificar los otros campos requeridos
        const nombre = form.elements['nombre'].value.trim();
        const genero = form.elements['genero'].value.trim();
        const email = form.elements['email'].value.trim();
        const mensaje = form.elements['mensaje'].value.trim();

        if (!radioSelected || !nombre || !genero || !email || !mensaje) {
            event.preventDefault();
            alert('Por favor, complete todos los campos requeridos.');
        }
    });
});