// Initialized a variable to store the entire content of the CSV.
let csv = "name,price,unit\n";

// Queried the DOM to find all the elements that represent each product.
const element = Array.from(document.getElementsByClassName("item"));

// iterated over each element found
element.forEach((el) => {
    let priceAndUnitElement = el.getElementsByTagName("span")[0];
    let priceAndUnit = priceAndUnitElement.textContent.split("/");
    let price = priceAndUnit[0].trim();
    let unit = priceAndUnit[1].trim();

    let name = el.getElementsByTagName("a")[0].textContent;

    csv += `${name}, ${price}, ${unit}\n`;
});

console.log(csv);


