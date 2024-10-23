        // Función para cambiar entre secciones
        function cambiarSeccion(seccionId) {
            // Remover clase active de todas las secciones y botones
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelectorAll('.nav-button').forEach(button => {
                button.classList.remove('active');
            });

            // Activar la sección y botón seleccionados
            document.getElementById(seccionId).classList.add('active');
            document.querySelector(`[data-section="${seccionId}"]`).classList.add('active');
        }

        // Agregar event listeners a los botones
        document.querySelectorAll('.nav-button').forEach(button => {
            button.addEventListener('click', () => {
                cambiarSeccion(button.dataset.section);
            });
        });