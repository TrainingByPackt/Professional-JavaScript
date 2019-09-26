const tagsToFilterBy = [];

const searchBoxElement = document.querySelector('search-box');
searchBoxElement.addEventListener('changed', (e) => applyFilters());

function addTagFilter() {
  Array.from(document.querySelectorAll('.extra .label'))
  .forEach(tagEl => {
    tagEl.addEventListener('click', () => {
      if (!tagsToFilterBy.includes(tagEl.innerHTML)) {
        tagsToFilterBy.push(tagEl.innerHTML);
        applyFilters();
      }
    });
  });
}

function applyFilters() {
  createListForProducts(filterByText(filterByTags(products)));
  addTagFilter();
  updateTagFilterList();
}

function createTagFilterLabel(tag) {
  const el = document.createElement('span');
  el.className = 'ui label orange';
  el.innerText = tag;

  el.addEventListener('click', () => {
    const index = tagsToFilterBy.indexOf(tag);
    tagsToFilterBy.splice(index, 1);
    applyFilters();
  });
  return el;
}

function filterByTags(products) {
  let filtered = products;
  tagsToFilterBy.forEach((t) => filtered = filtered.filter(p => p.tags.includes(t)));
  return filtered;
}

function filterByText(products) {
  const txt = searchBoxElement.searchText.toLowerCase();
  return products.filter((p) => {
    return p.name.toLowerCase().includes(txt)
      || p.description.toLowerCase().includes(txt);
  });
}

function updateTagFilterList() {
  const tagHolder = document.querySelector('.item span.tags');

  if (tagsToFilterBy.length == 0) {
    tagHolder.innerHTML = 'No filters';
  } else {
    tagHolder.innerHTML = '';
    tagsToFilterBy.sort();
    tagsToFilterBy.map(createTagFilterLabel)
      .forEach((tEl) => tagHolder.appendChild(tEl));
  }
}

applyFilters();
