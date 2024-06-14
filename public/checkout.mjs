import { getCartItemsFromLocalStorage } from "./utils.mjs";

const cartItems = getCartItemsFromLocalStorage();

const cartItemsContainer = document.getElementById('cartItems');

cartItems.map((cartItem) => {
  const form = document.createElement('form');

  form.innerHTML = `
    <img  width="100" src="${cartItem.image}">
    <h5>${cartItem.title}</h5>

    <p>Price: $${cartItem.price}</p>

    <p>Quantity: ${cartItem.quantity}</p>

    <p>Subtotal: $${cartItem.quantity * cartItem.price}</p>
  `;

  cartItemsContainer.appendChild(form);
});