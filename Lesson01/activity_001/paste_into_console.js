var csv = 'name,price,unit\n';
var elements = Array.from(document.getElementsByClassName('item'));
elements.forEach((el) => {
  var priceAndUnitElement = el.getElementsByTagName('span')[0];
  var priceAndUnit = priceAndUnitElement.textContent.split("/");
  var price = priceAndUnit[0].trim();
  var unit = priceAndUnit[1].trim();

  var name = el.getElementsByTagName('a')[0].textContent;

  csv += `${name},${price},${unit}\n`;
});
console.log(csv);
