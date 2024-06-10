export function loadImages(data) {
  const liContainer =  document.getElementById('loadImages');
  

  data.map(d => {
    const form = document.createElement('form');

    form.innerHTML = `
      <img height='170' src=${d.image}>
    `;
    liContainer.appendChild(form);
  });
}

export function getPageQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const currentPage = Number(urlParams.get('page') || 1);
  console.log('export ', currentPage);
  return currentPage;
}

