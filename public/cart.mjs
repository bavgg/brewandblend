import { getCartItemsFromLocalStorage, updateLocalStorage, updateUICartIcon } from "./utils.mjs";




renderCartItems();
renderSubtotal();

function getCartItemsTotalAmount() {
  const cartItems = getCartItemsFromLocalStorage();
  let totalAmount = 0;
  cartItems.map(cartItem => {
    const subtotal = cartItem.price * cartItem.quantity;
    totalAmount += subtotal;
  });

  return totalAmount;
}

function renderCartItems() {
  const cartItems = getCartItemsFromLocalStorage();
  cartItems.forEach(cartItem => {
    const itemsContainer = document.getElementById('items');
    const form = document.createElement('form');
    form.style.display = 'flex';

    form.innerHTML =
      `
    <img height='120' src=${cartItem.image} style="margin: 0px 10px">
    <div style="margin-right: auto">
      <h4>${cartItem.title}</h4>
      <p style="margin: 0px;">$${cartItem.price}.00</p>
      <div style="display: flex; align-items: end;">
        <label></label>
      </div>
    </div>
    `;

    /* ----------------------- element with event listnere ---------------------- */
    const inputElement = document.createElement('input');
    inputElement.id = 'inputQuantity';
    inputElement.type = 'number';
    inputElement.value = cartItem.quantity;

    let previousValue = inputElement.value;

    inputElement.addEventListener('blur', (event) => {

      // checks if input is empty
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
    /* ----------------------- element with event listnere ---------------------- */

    form.querySelector('label').appendChild(inputElement);

    itemsContainer.appendChild(form);

  });
}

// sideeffect
function addListener(htmlElement, callback) {

}


function renderSubtotal() {
  document.getElementById('action').innerHTML =
  `
    <form>
      <div>
        <h4>Subtotal: </h4>
        <p>$${getCartItemsTotalAmount()}.00</p>
      </div>
      <button style="color: white; background-color: #0968DA">Proceed to checkout</button>
    </form>
  `;

}




