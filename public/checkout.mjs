import { getCartItemsFromLocalStorage } from "./utils.mjs";

const cartItems = getCartItemsFromLocalStorage();

const cartItemsContainer = document.getElementById('cartItems');

cartItems.map((cartItem) => {
  const form = document.createElement('form');

  form.innerHTML = `
    <img  width="100" src="${cartItem.image}">
    <h4>${cartItem.title}</h4>
    <p>Price: $${cartItem.price}</p>
    <p>Quantity: ${cartItem.quantity}</p>
    <p>Subtotal: $${cartItem.quantity * cartItem.price}</p>
  `;
  cartItemsContainer.appendChild(form);
});

const form = document.getElementById('form');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const address = document.getElementById('address');

if (getDeliveryInfoFromLocalstorage() !== null) {
  const infoDelivery = getDeliveryInfoFromLocalstorage();
  name.value = infoDelivery.name;
  phone.value = infoDelivery.phone;
  address.value = infoDelivery.address;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const deliveryInputs = { name: name.value, phone: phone.value, address: address.value }

  saveToLocalStorage(deliveryInputs);
  alert("Your order has been successfully placed! Thank you for shopping with us.")
  window.location.href = 'http://localhost:3000/';
});

function saveToLocalStorage(inputs) {
  localStorage.setItem('deliveryInfo', JSON.stringify(inputs))
}

function getDeliveryInfoFromLocalstorage() {
  let deliveryInfo = localStorage.getItem('deliveryInfo');
  if (deliveryInfo !== null) {
    deliveryInfo = JSON.parse(deliveryInfo);
    return deliveryInfo;
  } else {
    return null;
  }
}