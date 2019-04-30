const productList = document.getElementById('featuredProductList');

for (let i = 0; i < productList.children.length; i++) {
	const product = productList.children[i];
	const productName = product.getElementsByClassName('title')[0].innerText;
	const price = product.getElementsByClassName('price')[0].children[1].innerText;
	console.log(`${productName} - Price: ${price}`);
};

const saleList = document.querySelector('#right ul');

for (let j = 0; j < saleList.children.length; j++) {
	const product = saleList.children[j];
	const productName = product.getElementsByClassName('title')[0].innerText;
	const originalPrice = product.getElementsByClassName('usual')[0].innerText;
	const salePrice = product.getElementsByClassName('special')[0].innerText;
	console.log(`
		${productName} 
		*Original Price:* ${originalPrice}
		SALE PRICE: ${salePrice}`);
}