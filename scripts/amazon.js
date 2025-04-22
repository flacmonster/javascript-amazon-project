//How to get to the 'cart' object without having
//to load the script file in order in amazon.html.
//This is explicitly being 'exported' from the
//cart.js file in the /data path.  ALWAYS at top.
//And always with Live Server ALSO: 
//import * as cartModule from '../data/cart.js
//works then here you'd type cartModule.cart or
//cartModule.addToCart.....
import { cart, addToCart } from '../data/cart.js';
import { products } from '../data/products.js'

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <!--This is where we attach the attribute data-product-id to be used
      later.  NOTE:  THIS HAS TO START WITH "data-"! -->
      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}" >
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;
}

//for the folling we're using "data attribute" attached to an element
//in order to determine which product is associated with this button
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      //HERE's THAT ATTACHED PROPERTY WE ADDED ABOVE
      const productId = button.dataset.productId;

      addToCart(productId);
      updateCartQuantity();
    });
  });