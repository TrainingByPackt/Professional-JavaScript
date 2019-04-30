const espresso = document.getElementsByClassName('featured')[0];
const parent = espresso.parentNode;

const coffeeList = Array.from(parent.children).map(node => {
	return node.textContent;
});

console.log(coffeeList.join(', '));