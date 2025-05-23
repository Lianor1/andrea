// Verificar si el usuario está autenticado
if (!sessionStorage.getItem('userRole')) {
    window.location.href = 'index.html';
}

// Manejar el cierre de sesión
document.getElementById('logout').addEventListener('click', function(e) {
    e.preventDefault();
    sessionStorage.removeItem('userRole');
    window.location.href = 'index.html';
});

// Datos de ejemplo de productos
const productos = [
    { id: 1, nombre: 'Camiseta', precio: 29.99, imagen: 'img/camiseta.jpg' },
    { id: 2, nombre: 'Pantalón', precio: 49.99, imagen: 'img/pantalon.jpg' },
    { id: 3, nombre: 'Vestido', precio: 79.99, imagen: 'img/vestido.jpg' }
];

function mostrarProductos() {
    const grid = document.getElementById('productsGrid');
    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        grid.appendChild(card);
    });
}

function agregarAlCarrito(productoId) {
    // Aquí irá la lógica para agregar productos al carrito
    alert('Producto agregado al carrito');
}

// Cargar productos cuando la página esté lista
document.addEventListener('DOMContentLoaded', mostrarProductos);