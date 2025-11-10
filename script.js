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
