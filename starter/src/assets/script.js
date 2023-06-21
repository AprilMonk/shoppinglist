/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let products = [{
  productId: "cherry",
  name: "Cherries",
  price: 5,
  desc: "Fresh Bright Red cherries!",
  image: "images/cherry.jpg",
  quantity: 0,
}, {
  productId: "strawberry",
  name: "Strawberries",
  price: 4,
  desc: "Fresh strawberries!",
  image: "images/strawberry.jpg",
  quantity: 0,
}, {
  productId: "orange",
  name: "Oranges",
  price: 10,
  desc: "Fresh Oranges right from the tree!",
  image: "images/orange.jpg",
  quantity: 0,
}];
let increment = () => { };
let decrement = () => { };
let update = () => { };

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

let cart = [];

/* addProductToCart takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
const addProductToCart = id => {
  const index = cart.findIndex(item => item.productId === id);
  if (index === -1) {
    const productToAdd = products.findIndex(item => item.productId === id);
    cart.push(products[productToAdd]);
  } else {
    cart[index].quantity += 1;
  }
}

/* increaseQuantity takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/* decreaseQuantity takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(id) {
  // decrement

}

/* removeProductFromCart takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(id) {
  // Remove the product
}

/* cartTotal has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
const cartTotal = () => { };


/* emptyCart empties the products from the cart */

/* pay takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount) {
  // do math here
}