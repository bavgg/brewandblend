import { getCartItemsFromLocalStorage, updateLocalStorage, updateUICartIcon, isAuthenticated } from "./utils.mjs";

function renderSubtotal() {
  const subtotal = getCartItemsTotalAmount();
  document.getElementById('action').innerHTML = `
    <form>
      <div>
        <h4>Subtotal: </h4>
        <p>$${subtotal}.00</p>
      </div>
      <button id="proceedToCheckoutButton" style="color: white; background-color: #0968DA">Proceed to checkout</button>
    </form>
  `;
}

function getCartItemsTotalAmount() {
  const cartItems = getCartItemsFromLocalStorage();
  return cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
}

function renderCartItems() {
  const cartItems = getCartItemsFromLocalStorage();
  const itemsContainer = document.getElementById('items');
  itemsContainer.innerHTML = ''; // Clear previous items

  cartItems.forEach(cartItem => {
    const form = document.createElement('form');
    form.style.display = 'flex';

    form.innerHTML = `
      <img height='120' src=${cartItem.image} style="margin: 0px 10px">
      <div style="margin-right: auto">
        <h4>${cartItem.title}</h4>
        <p style="margin: 0px;">$${cartItem.price}.00</p>
        <div style="display: flex; align-items: end;">
          <label></label>
        </div>
      </div>
    `;

    const inputElement = document.createElement('input');
    inputElement.id = 'inputQuantity';
    inputElement.type = 'number';
    inputElement.value = cartItem.quantity;

    let previousValue = inputElement.value;

    inputElement.addEventListener('blur', (event) => {
      if (event.target.value === '') {
        event.target.value = previousValue;
      } else {
        previousValue = event.target.value;
      }

      const quantity = parseInt(inputElement.value);
      updateLocalStorage(cartItem, quantity);
      updateUICartIcon();
      renderSubtotal();
    });

    form.querySelector('label').appendChild(inputElement);
    itemsContainer.appendChild(form);
  });
}

function renderProceedToCheckoutButton() {
  const actionContainer = document.getElementById('action');
  const cartItems = getCartItemsFromLocalStorage();

  if (cartItems.length === 0) {
    actionContainer.style.display = 'none';
  } else {
    actionContainer.style.display = 'block';
  }
}

function initProceedToCheckoutButton() {
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'proceedToCheckoutButton') {
      e.preventDefault();
      window.location.href = isAuthenticated() ? '/checkout.html' : '/signin.html';
    }
  });
}

function initialize() {
  renderCartItems();
  renderSubtotal();
  renderProceedToCheckoutButton();
  initProceedToCheckoutButton();
}

initialize();
