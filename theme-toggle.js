document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar el tema oscuro
    function loadDarkMode() {
        const darkStylesheet = document.createElement('link');
        darkStylesheet.rel = 'stylesheet';
        darkStylesheet.href = 'styles-dark.css';
        darkStylesheet.id = 'dark-mode-stylesheet';
        document.head.appendChild(darkStylesheet);
        localStorage.setItem('theme', 'dark');
    }

    // Función para quitar el tema oscuro
    function removeDarkMode() {
        const darkStylesheet = document.getElementById('dark-mode-stylesheet');
        if (darkStylesheet) {
            darkStylesheet.remove();
        }
        localStorage.setItem('theme', 'light');
    }

    // Comprobar el tema guardado en localStorage al cargar la página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        loadDarkMode();
    }

    // Botón para activar/desactivar el tema oscuro
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Modo Oscuro';
    darkModeButton.style.position = 'fixed';
    darkModeButton.style.bottom = '20px';
    darkModeButton.style.right = '20px';
    darkModeButton.addEventListener('click', function() {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            removeDarkMode();
        } else {
            loadDarkMode();
        }
    });

    document.body.appendChild(darkModeButton);
});