window.onload = function() {
    var form = document.querySelector('form');
    form.onsubmit = function(event) {
        // Asegúrate de que cada campo requerido no esté vacío
        if (!document.forms[0].name.value) {
            alert('Por favor, ingresa tu nombre.');
            event.preventDefault(); // Previene la acción por defecto (enviar el formulario)
            return false;
        }

        if (!document.forms[0].email.value) {
            alert('Por favor, ingresa tu email.');
            event.preventDefault(); // Previene la acción por defecto (enviar el formulario)
            return false;
        }

        var checked = document.querySelector('input[name="gender"]:checked');
        if (!checked) {
            alert('Por favor, selecciona un género.');
            event.preventDefault(); // Previene la acción por defecto (enviar el formulario)
            return false;
        }

        if (document.forms[0].subject.selectedIndex === 0) {
            alert('Por favor, selecciona un asunto.');
            event.preventDefault(); // Previene la acción por defecto (enviar el formulario)
            return false;
        }

        if (!document.forms[0].message.value) {
            alert('Por favor, escribe un mensaje.');
            event.preventDefault(); // Previene la acción por defecto (enviar el formulario)
            return false;
        }
    }
}