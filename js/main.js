// ===================open & close cart=================

var cart = document.querySelector('.cart');

function open_cart(){
    cart.classList.add("active");
}
function close_cart(){
    cart.classList.remove("active");
}

// =====================add items to cart=================
var all_products_json ;

var items_in_cart = document.querySelector('.items_in_cart');
let product_cart = [];

function adToCart (id , btn){
    product_cart.push(all_products_json[id])
    btn.classList.add('active')
    // console.log(product_cart);
    getCartItems()   
}

let count_item = document.querySelector('.count_item');
let count_item_cart = document.querySelector('.count_item_cart');
let price_cart_total = document.querySelector('.price_cart_total');
let price_cart_Head = document.querySelector('.price_cart_Head');


// ---------
function getCartItems(){
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
                    <button onclick="remove_frome_cart(${i})" class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
                </div>
        `

        total_price += product_cart[i].price

    }
    items_in_cart.innerHTML = items_c
    //   total price in my cart
    price_cart_Head.innerHTML = "$" + total_price
        // length product count on icon cart
    count_item.innerHTML = product_cart.length
    // count products and price into cart 
    count_item_cart.innerHTML = `(${product_cart.length} items in Cart)`
    price_cart_total.innerHTML = "$" + total_price
}



// delete item from cart
function remove_frome_cart(index){
    product_cart.splice(index , 1)
    getCartItems()


        
        // when user add product to cart => btn (cart icon) change to min color 

        // all btns no class active on it
    let addToCartBtons = document.querySelectorAll('.fa-cart-plus');
    for (let i = 0; i < addToCartBtons.length; i++) {
        addToCartBtons[i].classList.remove('active')
        product_cart.forEach(product=>{
            // when cliked on this btn change to min color
            if(product.id == i){
                addToCartBtons[i].classList.add('active')
            }
        })
        
    }

}

// ===============back_to_top===========

let back_to_top = document.querySelector('.back_to_top')
back_to_top.addEventListener('click' , function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})
// =========================================