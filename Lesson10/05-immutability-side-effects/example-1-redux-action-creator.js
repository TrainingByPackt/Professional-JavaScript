const ADD_PRODUCT = 'ADD_PRODUCT';

function addProduct(newProduct) {
  return {
    type: ADD_PRODUCT,
    newProduct
  };
}
