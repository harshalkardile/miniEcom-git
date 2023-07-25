// import { createCard } from "./scriptp";

// let cart = [];

// function addToCart(cartit) {
//     // Check if the item already exists in the cart
//     const existingItem = cart.find(cartItem => cartItem.name === cartit.name);
    
//     if (existingItem) {
//       // If the item already exists, increment the quantity
//       existingItem.quantity++;
//     } else {
//       // If the item does not exist, add it to the cart with quantity 1
//       cartit.quantity = 1;
//       cart.push(cartit);
//     }
  
    
//     updateTotal();
//     // alert('Item added to cart!');
//     // console.log(cartit); // Optional: Display the cart items in the console
//   }
  
  
//   // Function to create a card element (Same as before)
  
//   // Function to display the cards in the container (Same as before)
  
//   // Function to calculate the total price of cart items
  
//   function calculateTotal() {
//     let total = 0;
       
//     cart.forEach(cartit => {
//         // console.log(cartit); 
//       total += cartit.price * cartit.quantity;
//     //   console.log(total);
//     });
//     return total;
//     // Optional: Display the cart items in the console
//   }
  

  
//   // Function to update the total price display
// //   function updateTotal() {
// //     const tt = document.createElement('div');
// //     const totalElement = document.createElement('div');
// //     totalElement.textContent = `Total: $${calculateTotal()}`;
// //     tt.appendChild(totalElement);
// //   }

//   function updateTotal(){

//   const totalElement = document.getElementById('price');
//     totalElement.textContent = `Total: ${calculateTotal()}`;
    
// }

//   // Example usage to display the total price
//   updateTotal();

// ////////////////////////////////////////////////////////////////

// // function addToCart(cartitem) {

// //     cart.push(cartitem);
// //     alert('Item added to cart!');
// //     console.log(cartitem); 
// //     // }
// // }
// // function calculateTotal() {
// //     let total = 0;

// //     cart.forEach(item => {
// //     //   total += item.price;
// //     //   console.log(item);
// //     });
// //     return total;
// //   }

// //   const totalElement = document.createElement('div');
// //     totalElement.textContent = `Total: ${calculateTotal()}`;
// //     document.getElementById('card-container').appendChild(totalElement);

// // // const addToCartButton = document.getElementById('button');
// // // addToCartButton.addEventListener('click', addToCart);

