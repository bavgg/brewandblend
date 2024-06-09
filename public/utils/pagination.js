function createHref(currentPage) {
  const hostname = 'http://localhost:3000/';
  const filename = 'beverages.html';
  const href = hostname + filename + '?page=' + currentPage;
  return href;
}

export function createButtonLink(page, pn = null) {
  const a = document.createElement('a');

  if (pn === 'Previous') {
    const pageHref = createHref(page);
    const pageBtn = createButton('Previous');

    a.setAttribute('href', pageHref);
    a.appendChild(pageBtn);
  } else if (pn === 'Next') {
    const pageHref = createHref(page);
    const pageBtn = createButton('Next');

    a.setAttribute('href', pageHref);
    a.appendChild(pageBtn);
  } else {
    const pageHref = createHref(page);
    const pageBtn = createButton(page);

    a.setAttribute('href', pageHref);
    a.appendChild(pageBtn);
  }
  return a;
}

export function createButton(content) {
  const btn = document.createElement('button');
  btn.textContent = content;

  return btn;
}