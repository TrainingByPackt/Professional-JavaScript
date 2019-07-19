// Use this script to generate the products.js content from the storefront HTML
const productsString = JSON.stringify(Array.from(document.querySelectorAll('.item'))
.map(pEl => {
    let o = {};
    o.name = pEl.querySelector('a').innerHTML;
    o.description = pEl.querySelector('.description').innerHTML;
    o.tags = [];
    Array.from(pEl.querySelectorAll('.label'))
      .forEach(l => o.tags.push(l.innerHTML));

    return o;
  }), null, 2);

console.log(`const products = ${productsString};\n`);
