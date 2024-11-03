// =================== Open & Close Cart ===================
var cart = document.querySelector('.cart');

function open_cart() {
    cart.classList.add("active");
}
function close_cart() {
    cart.classList.remove("active");
}

// ===================== Open & Close Menu ==================
var menu = document.querySelector('#menu');

function open_menu() {
    menu.classList.add("active");
}
function close_menu() {
    menu.classList.remove("active");
}

// ==================== Chosen Image in Page Cart Details =====
let bigImage = document.getElementById('bigImage');

function changeItemImg(img) {
    bigImage.src = img;
}

// ===================== Add Items to Cart ===================
var all_products_json;
var items_in_cart = document.querySelector('.items_in_cart');
let product_cart = [];

function adToCart(id, btn) {
    // Check login status
    if (!localStorage.getItem('loggedInUser')) {
        alert("Please log in to add items to the cart.");
        return;
    }

    // If user is logged in, proceed to add the product
    product_cart.push(all_products_json[id]);
    btn.classList.add('active');
    getCartItems();
}

let count_item = document.querySelector('.count_item');
let count_item_cart = document.querySelector('.count_item_cart');
let price_cart_total = document.querySelector('.price_cart_total');
let price_cart_Head = document.querySelector('.price_cart_Head');

// --------- Get Cart Items ---------
function getCartItems() {
    let total_price = 0;
    let items_c = '';

    for (let i = 0; i < product_cart.length; i++) {
        items_c += `
         <div class="item_cart">
            <img src="${product_cart[i].img}" alt="img">
            <div class="content">
                <h4>${product_cart[i].name}.</h4>
                <p class="price_cart">$${product_cart[i].price}</p>
            </div>
            <button onclick="remove_from_cart(${i})" class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
         </div>
        `;

        total_price += product_cart[i].price;
    }

    items_in_cart.innerHTML = items_c;
    // Update total price in cart
    price_cart_Head.innerHTML = "$" + total_price;
    // Update product count on cart icon
    count_item.innerHTML = product_cart.length;
    // Update product count and total price in cart details
    count_item_cart.innerHTML = `(${product_cart.length} items in Cart)`;
    price_cart_total.innerHTML = "$" + total_price;
}

// Delete item from cart
function remove_from_cart(index) {
    product_cart.splice(index, 1);
    getCartItems();

    // Reset buttons for items not in the cart
    let addToCartButtons = document.querySelectorAll('.fa-cart-plus');
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].classList.remove('active');
        product_cart.forEach(product => {
            if (product.id == i) {
                addToCartButtons[i].classList.add('active');
            }
        });
    }
}

// =============== Back to Top =========== 
let back_to_top = document.querySelector('.back_to_top');
back_to_top.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// =================== Logout Functionality and Display Welcome Message ===================
document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.querySelector('a[href="login.html"]');
    const signupLink = document.querySelector('a[href="register.html"]');
    const logoutLink = document.querySelector('#logout');
    const welcomeMessage = document.querySelector('#welcome-message'); // تصحيح السطر هنا
    
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        loginLink.style.display = 'none';
        signupLink.style.display = 'none';
        logoutLink.style.display = 'inline';
        logoutLink.classList.add('large-logout');
        welcomeMessage.innerHTML = `Hello, "${loggedInUser}" 👋`;
    } else {
        loginLink.style.display = 'inline';
        signupLink.style.display = 'inline';
        logoutLink.style.display = 'none';
        welcomeMessage.innerHTML = '';
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('loggedInUser');
            window.location = 'login.html';
        });
    }
});


// ==================== Change Item Image on Click ====================
function changeItemImg(imgSrc) {
    const bigImage = document.getElementById("bigImage");
    bigImage.src = imgSrc;
}

// ==================== Display Products Dynamically ====================
const swiperItems = document.getElementById("swiper_items_sale");
products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "swiper-slide";
    productDiv.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
    `;
    swiperItems.appendChild(productDiv);
});
