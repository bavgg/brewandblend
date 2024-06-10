export function loadImages(data) {
  const liContainer = document.getElementById('loadImages');

  console.log(liContainer);
  data.map(d => {
    const form = document.createElement('form');

    form.innerHTML = `
      <img height='170' src=${d.image}>
    `;
    liContainer.appendChild(form);
  });
}

export function setPageCategoryQuery(page, category) {
  const url = new URL(window.location.href);
  url.searchParams.set('page', page);
  url.searchParams.set('category', category);
  console.log(url.searchParams.get('page'));
  window.history.pushState({}, '', url);
}

export function setPageQuery() {
  // Create a new URL object
  const url = new URL(window.location.href);
  // Set query parameters
  url.searchParams.set('page', '1');
  // Update the URL in the browser without reloading the page
  window.history.pushState({}, '', url);
}

export function emptyPaginationDivContainer() {
  const paginationDivContainer = document.getElementById('paginationDivContainer');
  paginationDivContainer.innerHTML = '';
}

