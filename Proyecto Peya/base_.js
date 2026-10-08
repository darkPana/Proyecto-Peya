// Función para verificar interactividad o conexión con el Backend
function verificarConexion() {
    const btn = document.getElementById('btnConexion');
    
    // Cambiamos el texto temporalmente para simular una consulta
    btn.innerText = 'Verificando...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        alert('¡El JavaScript está funcionando correctamente!\n\nMás adelante, esta función llamará a Python mediante un API Fetch.');
        btn.innerText = 'Probar Conexión';
        btn.style.opacity = '1';
    }, 500);
}

// Puedes agregar más funciones aquí a medida que avance el proyecto
console.log('Script cargado y listo para usar.');