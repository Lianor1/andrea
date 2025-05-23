document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Efecto de carga en el botón
    const button = document.querySelector('.login-btn');
    const originalText = button.textContent;
    button.textContent = 'Procesando...';
    button.style.opacity = '0.8';
    
    // Simulación de autenticación
    setTimeout(() => {
        // Aquí puedes agregar tu lógica de autenticación real
        console.log('Usuario:', username, 'Contraseña:', password);
        
        // Restaurar el botón
        button.textContent = originalText;
        button.style.opacity = '1';
        
        // Efecto de éxito (puedes modificar esto según tu lógica)
        const loginBox = document.querySelector('.login-box');
        loginBox.style.animation = 'success 0.5s';
        setTimeout(() => {
            loginBox.style.animation = '';
        }, 500);
    }, 1500);
});

// Efecto de parallax suave en la decoración
document.addEventListener('mousemove', function(e) {
    const decoration = document.querySelector('.fashion-decoration');
    if (decoration) {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        decoration.style.transform = `
            perspective(1000px)
            rotateY(${mouseX * 5}deg)
            rotateX(${-mouseY * 5}deg)
            translateZ(0)
        `;
    }
});

// Animación suave para los inputs
document.querySelectorAll('.input-group input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// Agregar estilos de keyframes dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes success {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
        100% { transform: translateX(0); }
    }
`;
document.head.appendChild(style);