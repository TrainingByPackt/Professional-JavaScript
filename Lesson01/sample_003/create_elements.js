function createContent(product) {
  const content = document.createElement('div');
  content.className = 'content';

  const tagsHTML = product.tags.map(createTagElement)
    .map(el => el.outerHTML)
    .join('');

  content.innerHTML = `
    <a class="header">${product.name}</a>
    <div class="meta"><span>$${product.price} / ${product.unit}</span></div>
    <div class="description">${product.description}</div>
    <div class="extra">${tagsHTML}</div>
  `;

  return content;
}

function createProductItem(product) {
  const root = document.createElement('div');
  root.className = 'item';

  root.appendChild(createProductImage(product.image));
  root.appendChild(createContent(product));
  return root;
}

function createProductImage(imageSrc) {
  const imageContainer = document.createElement('div');
  imageContainer.className = 'image';

  const image = document.createElement('img');
  image.setAttribute('src', imageSrc);
  imageContainer.appendChild(image);

  return imageContainer;
}

function createTagElement(tag) {
  const tagEl = document.createElement('div');
  tagEl.className = 'ui label teal';
  tagEl.innerText = tag;
  return tagEl;
}

function createListForProducts(products) {
  const itemsEl = document.querySelector('.items');
  itemsEl.innerHTML = '';
  products.forEach((product) => {
    itemsEl.appendChild(createProductItem(product));
  });
}

createListForProducts(products);
