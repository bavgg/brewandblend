import { jwtDecode } from "jwt-decode";

// Function to load images into a container
export function loadImages(data) {
  const imageContainer = document.getElementById('loadImages');

  data.forEach(item => {
    const imageForm = document.createElement('form');
    imageForm.innerHTML = `<img height='170' src=${item.image}>`;
    imageContainer.appendChild(imageForm);
  });
}

// Function to update URL with page and category query parameters
export function updatePageAndCategory(page, category) {
  const url = new URL(window.location.href);
  url.searchParams.set('page', page);
  url.searchParams.set('category', category);
  window.history.pushState({}, '', url);
}

// Function to clear the contents of a pagination container
export function clearPaginationContainer() {
  const paginationContainer = document.getElementById('paginationDivContainer');
  paginationContainer.innerHTML = '';
}

// Function to create a button element
export function createButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  return button;
}

// Function to check if a user is authenticated
export function isAuthenticated() {
  const token = localStorage.getItem('authToken');
  
  if (!token) {
    return false;
  }
  
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // current time in seconds

    return decodedToken.exp >= currentTime;
  } catch (error) {
    console.error('Invalid token:', error);
    return false;
  }
}

// Function to update the cart icon with the total quantity of items
export function updateUICartIcon() {
  const cartCountDiv = document.getElementById('count');
  cartCountDiv.textContent = getTotalCartQuantity();
}

// Function to initialize the cart UI with the current total quantity
export function initializeCartUI() {
  const cartCountDiv = document.getElementById('count');
  cartCountDiv.textContent = getTotalCartQuantity();
}

// Function to add an item to the cart
export function addToCart(item) {
  item.quantity = 1;
  const cartItems = getCartItemsFromLocalStorage();
  const updatedCartItems = addOrUpdateCartItem(cartItems, item);

  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
}

// Function to get cart items from local storage
export function getCartItemsFromLocalStorage() {
  const storedCartItems = localStorage.getItem('cartItems');
  return JSON.parse(storedCartItems) || [];
}

export function updateLocalStorage(cartItem, quantity) {
  const cartItems = getCartItemsFromLocalStorage();
  const matchedItem = cartItems.find(item => item.title === cartItem.title);

  matchedItem.quantity = quantity;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Helper function to add or update an item in the cart
function addOrUpdateCartItem(cartItems, newItem) {
  const existingItem = cartItems.find(item => item.title === newItem.title);

  if (existingItem) {
    existingItem.quantity += newItem.quantity;
  } else {
    cartItems.push(newItem);
  }
  return cartItems;
}

// Helper function to get the total quantity of items in the cart
function getTotalCartQuantity() {
  const cartItems = getCartItemsFromLocalStorage();

  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

export async function onSignOut() {
  try {
    const cartItems = getCartItemsFromLocalStorage();

    // save cart items if greater than zero
    if (cartItems.length > 0) {
      const response = await fetch('/user/cart/save', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems }),
      });

      if (!response.ok) throw new Error('Failed to save data to server');
    }
    localStorage.removeItem('cartItems');
    localStorage.removeItem('authToken');
    localStorage.removeItem('deliveryInfo');
    window.location.href = "http://localhost:3000/";


  } catch (error) {
    console.error('Error:', error);
  }
}

// Create a pagination button with a click listener
export function createPaginationButton(content, callback) {
  const button = createButton(content);
  button.addEventListener('click', callback);
  return button;
}