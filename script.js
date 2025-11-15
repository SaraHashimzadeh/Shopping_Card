//Cart
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let total = 0;
let itemCount = 0;

//Add to cart
function addToCart(productCard) {

    const name = productCard.querySelector('.product-name').textContent;
    const priceText = productCard.querySelector(".product-price").textContent;
    const price = parseFloat(priceText.replace('$', ''));
    const imgSrc = productCard.querySelector('.product-image').src;

    const existingItem = cartItems.find((item) => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            name,
            price,
            quantity: 1,
            image: imgSrc
        });
    }
    updateLocalStorage();
    updateCartDisplay();

}
//Show cart item in cart
function updateCartDisplay() {
    const cartList = document.getElementById('cart-items')
    const totalElement = document.getElementById('total-price')
    const countElement = document.getElementById('cart-count');

    cartList.innerHTML = '';
    total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    cartItems.forEach((item) => {
        const li = document.createElement('li');
        li.classList = 'cart-item';
        li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${item.price} * ${item.quantity}</div>
        </div>

        <div class="quantity-controls">
            <button onclick="changeQuantity('${item.name}', -1)">-</button>
            <button onclick="changeQuantity('${item.name}', 1)">+</button>
        </div>

         <button class="remove" onclick="removeItem('('${item.name}')')">x</button>
        `;
        cartList.appendChild(li);
    });
    totalElement.textContent = total.toFixed(2);
    countElement.textContent = itemCount;
}


//Store Cart In Local Storage to main on page refresh
function updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


//Cart OPen Close
let cartIcon = document.querySelector(".cart-icon");
let cartModel = document.querySelector(".cart-model");
let closeBtn = document.querySelector(".close-btn");

cartIcon.addEventListener("click", function () {
    cartModel.classList.add("open-cart");
});

closeBtn.addEventListener("click", function () {
    cartModel.classList.remove("open-cart")
});
