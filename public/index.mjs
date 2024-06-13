import { topFiveBeveragesByRank } from './beveragesData.mjs';
const beverageContainer = document.getElementById('beverageContainer');
import { addToCart, updateUICartIcon, initializeCartUI } from './utils.mjs';

initializeCartUI();
const displayBeverages = async () => {

  topFiveBeveragesByRank.map(beverage => {
    const form = document.createElement('form');

    const addToCartButton = document.createElement('button');
    addToCartButton.innerText = 'Add to cart';

    addToCartButton.addEventListener('click', (e) => {
      e.preventDefault();

      addToCart({ ...beverage });

      updateUICartIcon();
    });

    form.innerHTML = `
          <img height='170' src=${beverage.image}>
          <h4>${beverage.title}</h4>
          <p>$${beverage.price}.00</p>
        `;
    form.appendChild(addToCartButton);
    beverageContainer.appendChild(form);
  });
}
displayBeverages();