//Cart
let cartItems = JSON.parse(localStorage.getItem('cartItem')) || [];

//Add to cart
function addToCart(productCard){

const name = productCard.querySelector('.product-name').textContent;
const priceText = productCard.querySelector(".product-price").textContent;
const price = parseFloat(priceText.replace('$', ''));
const imgSrc = productCard.querySelector('.product-image').src;

const existingItem = cartItems.find((item) => item.name === name);

if(existingItem) {
    existingItem.quantity +=1;
} else {
    cartItems.push ({
        name,
        price,
        quantity: 1,
        image:imgSrc
    });
}
updateLocalStorage();

}

//Store Cart In Local Storage to main on page refresh
function updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


//Cart OPen Close
let cartIcon = document.querySelector(".cart-icon");
let cartModel = document.querySelector(".cart-model");
let closeBtn = document.querySelector(".close-btn");

cartIcon.addEventListener("click", function(){
    cartModel.classList.add("open-cart");
});

closeBtn.addEventListener("click", function(){
    cartModel.classList.remove("open-cart")
});
