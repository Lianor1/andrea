document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Aquí puedes agregar la lógica de autenticación
    console.log('Usuario:', username, 'Contraseña:', password);
    
    // Efecto de animación al enviar
    const loginBox = document.querySelector('.login-box');
    loginBox.style.animation = 'shake 0.5s';
    setTimeout(() => {
        loginBox.style.animation = '';
    }, 500);
});

// Efecto de parallax suave
document.addEventListener('mousemove', function(e) {
    const loginBox = document.querySelector('.login-box');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    loginBox.style.transform = `
        perspective(1000px)
        rotateY(${mouseX * 5}deg)
        rotateX(${-mouseY * 5}deg)
        translateY(-10px)
    `;
});

// Restaurar posición cuando el mouse sale
document.addEventListener('mouseleave', function() {
    const loginBox = document.querySelector('.login-box');
    loginBox.style.transform = 'translateY(-10px)';
});