const filterByTagElement = document.querySelector('tags-holder');
filterByTagElement.addEventListener('tag-clicked', (e) => filterByTagElement.removeTag(e.detail.tag));
filterByTagElement.addEventListener('changed', () => applyFilters());

const searchBoxElement = document.querySelector('search-box');
searchBoxElement.addEventListener('changed', (e) => applyFilters());

function addTagFilter() {
  Array.from(document.querySelectorAll('.extra .label'))
  .forEach(tagEl => tagEl.addEventListener('click', () => {
    filterByTagElement.addTag(tagEl.innerHTML);
    applyFilters();
  }));
}

function applyFilters() {
  createListForProducts(filterByText(filterByTags(products)));
  addTagFilter();
}

function filterByTags(products) {
  let filtered = products;
  filterByTagElement.selectedTags
    .forEach((t) => filtered = filtered.filter(p => p.tags.includes(t)));
  return filtered;
}

function filterByText(products) {
  const txt = searchBoxElement.searchText.toLowerCase();
  return products.filter((p) => {
    return p.name.toLowerCase().includes(txt)
      || p.description.toLowerCase().includes(txt);
  });
}

applyFilters();
