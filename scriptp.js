//   import { addToCart } from "./cart";
  
  
  //To create card each time for new data rendering using DOM
    function createCard(name, price, image) {
        const card = document.createElement('div');
        card.classList.add('card');
      
        const img = document.createElement('img');
        
        img.src = `./images/${image}`;
        card.appendChild(img);
      
        const nameElement = document.createElement('div');
        nameElement.classList.add('name');
        nameElement.textContent = name;
        card.appendChild(nameElement);
      
        const priceElement = document.createElement('div');
        priceElement.classList.add('price');
        priceElement.textContent = `₹ ${price}`;
        card.appendChild(priceElement);

        const buttonElement = document.createElement('cart-button');
        buttonElement.classList.add('cart-button');
        buttonElement.setAttribute("id","button");
        buttonElement.textContent= 'Add to cart'
        buttonElement.addEventListener('click', function () {
            addToCart({ name, price, image });
          });
        card.appendChild(buttonElement);

        

                return card;
            }
    

    //Asyncronus display funtion to render the data on webpage
    const dispData= async () => {

        //To get the id from the div
        const output = document.getElementById("card-container");

        // console.log(localStorage.getItem('Product'));
        if(localStorage.getItem('Product')){
            
            // output.innerHTML= "";
            // let dataDisplay = JSON.parse(localStorage.getItem('Product')).map(data => {
            // const{ name, price, image } = data;
            // console.log(data);
            // return `
            //         <img src="images/./$data.image">
            //         <h4>data.name</h4>
            //         <p>data.price</p>
            //         `
            // }).join("");
            // output.innerHTML=dataDisplay;  
            
            
            let dataDisplay = JSON.parse(localStorage.getItem('Product'))
            dataDisplay.forEach(item => {
                // console.log(item);
                const card = createCard(item.name, item.price, item.image);
                output.appendChild(card);
                // const h1 = document.createElement("h1")
                // h1.innerHTML = element.name;
                // output.appendChild(h1);
            });
        }
    }

    // calling declared function for diplaying the data
    dispData();



    // function createCart(name, price){

    //     const cart = document.createElement('div');
    //     cart.classList.add('card');

    //     const quantityContainer = document.createElement('div');
    //     quantityContainer.classList.add('quantity-container');

    //     const minusButton = document.createElement('button');
    //     minusButton.textContent = '-';
    //     minusButton.addEventListener('click', function () {
    //         const quantityInput = quantityContainer.querySelector('input');
    //         const newQuantity = parseInt(quantityInput.value) - 1;
    //         if (newQuantity >= 1) {
    //         quantityInput.value = newQuantity;
    //         updateQuantity(name, newQuantity);
    //         }
    //     });
    //     quantityContainer.appendChild(minusButton);

    //     const quantityInput = document.createElement('input');
    //     quantityInput.type = 'number';
    //     quantityInput.value = 1;
    //     quantityInput.min = 1;
    //     quantityInput.addEventListener('change', function () {
    //         const newQuantity = parseInt(quantityInput.value, 10);
    //         if (!isNaN(newQuantity) && newQuantity >= 1) {
    //         updateQuantity(name, newQuantity);
    //         } else {
    //         quantityInput.value = 1;
    //         updateQuantity(name, 1);
    //         }
    //     });
    //     quantityContainer.appendChild(quantityInput);

    //     const plusButton = document.createElement('button');
    //     plusButton.textContent = '+';
    //     plusButton.addEventListener('click', function () {
    //         const quantityInput = quantityContainer.querySelector('input');
    //         const newQuantity = parseInt(quantityInput.value) + 1;
    //         quantityInput.value = newQuantity;
    //         updateQuantity(name, newQuantity);
    //     });
    //     quantityContainer.appendChild(plusButton);

    //     cart.appendChild(quantityContainer);
    // }
    
    let cart = [];


    function updateQuantity(itemName, newQuantity) {
        const item = cart.find(cartItem => cartItem.name === itemName);
        if (item) {
          item.quantity = parseInt(newQuantity, 10);
        }
        updateTotal();
      }


    function addToCart(cartit) {
        // Check if the item already exists in the cart
        const existingItem = cart.find(cartItem => cartItem.name === cartit.name);
        
        if (existingItem) {
          // If the item already exists, increment the quantity
          existingItem.quantity++;
        } else {
          // If the item does not exist, add it to the cart with quantity 1
          cartit.quantity = 1;
          cart.push(cartit);
        }
      
        
        updateTotal();
        // alert('Item added to cart!');
        // console.log(cartit); // Optional: Display the cart items in the console
      }
      
      
      // Function to create a card element (Same as before)
      
      // Function to display the cards in the container (Same as before)
      
      // Function to calculate the total price of cart items
      
      function calculateTotal() {
        let total = 0;
           
        cart.forEach(cartit => {
            // console.log(cartit); 
          total += cartit.price * cartit.quantity;
        //   console.log(total);
        });
        return total;
        // Optional: Display the cart items in the console
      }
      

      
      // Function to update the total price display
    //   function updateTotal() {
    //     const tt = document.createElement('div');
    //     const totalElement = document.createElement('div');
    //     totalElement.textContent = `Total: $${calculateTotal()}`;
    //     tt.appendChild(totalElement);
    //   }

      function updateTotal(){

      const totalElement = document.getElementById('price');
        totalElement.textContent = `Total: ${calculateTotal()}`;
        
    }

      // Example usage to display the total price
      updateTotal();

////////////////////////////////////////////////////////////////

    // function addToCart(cartitem) {
   
    //     cart.push(cartitem);
    //     alert('Item added to cart!');
    //     console.log(cartitem); 
    //     // }
    // }
    // function calculateTotal() {
    //     let total = 0;
    
    //     cart.forEach(item => {
    //     //   total += item.price;
    //     //   console.log(item);
    //     });
    //     return total;
    //   }

    //   const totalElement = document.createElement('div');
    //     totalElement.textContent = `Total: ${calculateTotal()}`;
    //     document.getElementById('card-container').appendChild(totalElement);
    
    // // const addToCartButton = document.getElementById('button');
    // // addToCartButton.addEventListener('click', addToCart);

    