ocument.addEventListener("DOMContentLoaded", function () {
    console.log("TECHNEST: JavaScript cargado correctamente.");

    // 🔹 LOGIN - Validación y autenticación
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email === "user@technest.com" && password === "12345") {
                alert("Inicio de sesión exitoso.");
                window.location.href = "Home";
            } else {
                alert("Correo o contraseña incorrectos.");
            }
        });
    }

    // 🔹 REGISTER - Validación y almacenamiento de usuario
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (name && email && password) {
                localStorage.setItem("user", JSON.stringify({ name, email, password }));
                alert("Registro exitoso. Ahora inicia sesión.");
                window.location.href = "Login";
            } else {
                alert("Por favor, completa todos los campos.");
            }
        });
    }

    // 🔹 FORGOT PASSWORD - Simulación de recuperación de contraseña
    const forgotPasswordForm = document.getElementById("forgot-password-form");
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;

            if (email) {
                alert("Si el correo está registrado, recibirás un enlace de recuperación.");
            } else {
                alert("Por favor, ingresa tu correo electrónico.");
            }
        });
    }

    // 🔹 PRODUCT - Agregar productos al carrito y redirigir a cart.html
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            const productCard = event.target.closest(".producto, .oferta");
            const productName = productCard.querySelector("h3").textContent;
            const productPrice = parseFloat(productCard.querySelector("p").textContent.replace("$", ""));
            const productImage = productCard.querySelector("img").src;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Verificar si el producto ya está en el carrito
            let existingProduct = cart.find(item => item.name === productName);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1, image: productImage });
            }

            localStorage.setItem("cart", JSON.stringify(cart));

            // Redirigir al carrito
            window.location.href = "Carrito";
        });
    });

    // 🔹 CART - Mostrar y gestionar productos en cart.html
    if (window.location.pathname.includes("Carrito")) {
        loadCart();
    }

    function loadCart() {
        const cartTableBody = document.querySelector("tbody");
        const totalPriceElement = document.getElementById("total-price");
        const cartSummary = document.getElementById("cart-summary");
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalPrice = 0;

        cartTableBody.innerHTML = ""; // Limpiar contenido previo
        cartSummary.innerHTML = "";

        cart.forEach(product => {
            let totalItemPrice = product.price * product.quantity;
            totalPrice += totalItemPrice;

            let row = `
                <tr>
                    <td><img src="${product.image}" alt="${product.name}" style="width:50px;"> ${product.name}</td>
                    <td>$${product.price.toFixed(2)}</td>
                    <td>
                        <button class="decrease" data-name="${product.name}">-</button>
                        ${product.quantity}
                        <button class="increase" data-name="${product.name}">+</button>
                    </td>
                    <td>$${totalItemPrice.toFixed(2)}</td>
                    <td><button class="remove" data-name="${product.name}">❌</button></td>
                </tr>
            `;
            cartTableBody.innerHTML += row;
            cartSummary.innerHTML += `<p>${product.quantity}x ${product.name}</p>`;
        });

        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

        // Event Listeners para actualizar cantidad o eliminar
        document.querySelectorAll(".increase").forEach(button => {
            button.addEventListener("click", () => updateQuantity(button.dataset.name, 1));
        });

        document.querySelectorAll(".decrease").forEach(button => {
            button.addEventListener("click", () => updateQuantity(button.dataset.name, -1));
        });

        document.querySelectorAll(".remove").forEach(button => {
            button.addEventListener("click", () => removeProduct(button.dataset.name));
        });

        // 🔹 Finalizar compra
        const checkoutButton = document.getElementById("checkout-btn");
        if (checkoutButton) {
            checkoutButton.addEventListener("click", function () {
                if (cart.length > 0) {
                    alert("¡Compra realizada con éxito!");
                    localStorage.removeItem("cart");
                    location.reload();
                } else {
                    alert("El carrito está vacío.");
                }
            });
        }
    }

    // 🔹 Función para actualizar cantidad de productos
    function updateQuantity(productName, change) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let product = cart.find(item => item.name === productName);
        
        if (product) {
            product.quantity += change;
            if (product.quantity <= 0) {
                cart = cart.filter(item => item.name !== productName);
            }
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }

    // 🔹 Función para eliminar un producto del carrito
    function removeProduct(productName) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter(item => item.name !== productName);
        
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const modoOscuroBtn = document.getElementById("modoOscuro");
    const productosLista = document.getElementById("productos-lista");
    const loadMoreButton = document.getElementById("loadMore");

    // Alternar modo oscuro
    modoOscuroBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        modoOscuroBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Productos dinámicos
    const productos = [
        { img: "images/auriculares.jpg", nombre: "Auriculares Bluetooth", precio: "$150.00" },
        { img: "images/monitor.jpg", nombre: "Monitor 4K", precio: "$350.00" },
        { img: "images/mouse.jpg", nombre: "Mouse Gamer", precio: "$50.00" }
    ];

    function agregarProducto(producto) {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList.add("producto");
        nuevoProducto.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <span class="precio">${producto.precio}</span>
            <button class="agregar-carrito">Agregar al carrito</button>
        `;
        productosLista.appendChild(nuevoProducto);
    }

    loadMoreButton.addEventListener("click", function() {
        agregarProducto(productos[Math.floor(Math.random() * productos.length)]);
    });
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    if (email) {
        localStorage.setItem("userEmail", email);
        window.location.href = "index.php";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("register-form");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const passwordError = document.getElementById("password-error");
    const termsCheckbox = document.getElementById("terms");
    const registerBtn = document.getElementById("register-btn");

    // Función para validar si las contraseñas coinciden
    function validatePassword() {
        if (password.value !== confirmPassword.value) {
            passwordError.textContent = "Las contraseñas no coinciden.";
            registerBtn.disabled = true;
        } else {
            passwordError.textContent = "";
            registerBtn.disabled = !termsCheckbox.checked;
        }
    }

    // Función para habilitar/deshabilitar el botón según los términos
    termsCheckbox.addEventListener("change", function() {
        registerBtn.disabled = !termsCheckbox.checked || password.value !== confirmPassword.value;
    });

    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validatePassword);

    // Función para alternar la visibilidad de la contraseña
    window.togglePassword = function(id) {
        const input = document.getElementById(id);
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
    };

    // Validar número de teléfono (solo números y 10 dígitos)
    document.getElementById("phone").addEventListener("input", function(e) {
        this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });

    // Validar formulario antes de enviar
    form.addEventListener("submit", function(e) {
        if (password.value !== confirmPassword.value) {
            e.preventDefault();
            alert("Las contraseñas no coinciden. Corrige el error.");
        }
    });
});