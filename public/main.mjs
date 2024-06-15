import {
  updateUICartIcon, initializeCartUI, addToCart, updatePageAndCategory,
  clearPaginationContainer, loadImages, createButton, createPaginationButton
} from './utils.mjs';
import { beverages, getDataByPageAndCategory } from './beveragesData.mjs';

// ContainerElement
const beverageContainer = document.getElementById('beverageContainer');

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  displayBeveragesByPageAndCategory('all', 1);
  loadImages(beverages);
});


// Beverage category event listeners
const beverageCategories = {
  coffee: 'coffee',
  hot: 'hot_beverage',
  cold: 'cold_beverage',
  seasonal: 'seasonal',
  tea: 'tea',
};

Object.keys(beverageCategories).forEach(id => {
  document.getElementById(id).addEventListener('click', () => {
    displayBeveragesByPageAndCategory(beverageCategories[id], 1);
  });
});

// Utility functions
function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
    `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`
  ).join(''));

  return JSON.parse(jsonPayload);
}

function verifyToken(token) {
  const decodedToken = parseJwt(token);
  if (!decodedToken) return false;

  const currentTime = Date.now() / 1000; // convert to seconds
  return decodedToken.exp && currentTime <= decodedToken.exp;
}

function getCookie(name) {
  const cookieArr = document.cookie.split(';');
  for (const cookie of cookieArr) {
    const [key, value] = cookie.split('=');
    if (key.trim() === name) return decodeURIComponent(value);
  }
  return null;
}

// Sign out function


// Display beverages by category and page
function displayBeveragesByPageAndCategory(category, page) {
  clearPaginationContainer();
  beverageContainer.innerHTML = '';

  const data = getDataByPageAndCategory(page, category);

  data.partition.forEach(d => {
    const form = document.createElement('form');
    const addToCartButton = createButton('Add to cart');

    addToCartButton.addEventListener('click', (e) => {
      e.preventDefault();
      addToCart({ ...d });
      updateUICartIcon();
    });

    form.innerHTML = `
      <img height='170' src=${d.image}>
      <h4>${d.title}</h4>
      <p>$${d.price}.00</p>
    `;
    form.appendChild(addToCartButton);
    beverageContainer.appendChild(form);
  });

  const totalPages = data.length;
  displayPagination(page, totalPages, category);
  updatePageAndCategory(page, category);
}

// Display pagination
function displayPagination(currentPage, totalPages, category) {
  const paginationDivContainer = document.getElementById('paginationDivContainer');

  if (currentPage > 1) {
    paginationDivContainer.appendChild(createPaginationButton('Previous', () => displayBeveragesByPageAndCategory(category, currentPage - 1)));
  }

  if (currentPage > 4) {
    paginationDivContainer.appendChild(createPaginationButton(1, () => displayBeveragesByPageAndCategory(category, 1)));
    paginationDivContainer.appendChild(createButton('...'));
  } else if (currentPage > 3) {
    paginationDivContainer.appendChild(createPaginationButton(currentPage - 3, () => displayBeveragesByPageAndCategory(category, currentPage - 3)));
  }

  if ((currentPage - 2) > 0) {
    paginationDivContainer.appendChild(createPaginationButton(currentPage - 2, () => displayBeveragesByPageAndCategory(category, currentPage - 2)));
  }

  if ((currentPage - 1) > 0) {
    paginationDivContainer.appendChild(createPaginationButton(currentPage - 1, () => displayBeveragesByPageAndCategory(category, currentPage - 1)));
  }

  paginationDivContainer.appendChild(createPaginationButton(currentPage, () => displayBeveragesByPageAndCategory(category, currentPage)));

  if ((currentPage + 1) <= totalPages) {
    paginationDivContainer.appendChild(createPaginationButton(currentPage + 1, () => displayBeveragesByPageAndCategory(category, currentPage + 1)));
  }

  if ((currentPage + 2) <= totalPages) {
    paginationDivContainer.appendChild(createPaginationButton(currentPage + 2, () => displayBeveragesByPageAndCategory(category, currentPage + 2)));
  }

  if ((currentPage + 4) <= totalPages) {
    paginationDivContainer.appendChild(createButton('...'));
  } else if ((currentPage + 3) <= totalPages) {
    paginationDivContainer.appendChild(createPaginationButton(currentPage + 3, () => displayBeveragesByPageAndCategory(category, currentPage + 3)));
  }

  if ((currentPage + 4) <= totalPages) {
    paginationDivContainer.appendChild(createPaginationButton(totalPages, () => displayBeveragesByPageAndCategory(category, totalPages)));
  }

  if (currentPage < totalPages) {
    paginationDivContainer.appendChild(createPaginationButton('Next', () => displayBeveragesByPageAndCategory(category, currentPage + 1)));
  }
}