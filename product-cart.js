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
          
        
      let dataDisplay = JSON.parse(localStorage.getItem('Product'))
          dataDisplay.forEach(item => {
              // console.log(item);
              const card = createCard(item.name, item.price, item.image);
              output.appendChild(card);
          
          });
      }
    }
    // calling declared function for diplaying the data
    dispData();

    let cart = [];

    function addToCart(cartit) {
      // Check if the item already exists in the cart
      const existingItem = cart.find(cartItem => cartItem.name === cartit.name);
      // debugger
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
      
    }
      
    function calculateTotal() {
      let total = 0;
          
      cart.forEach(cartit => {
          // console.log(cartit); 
        total += cartit.price * cartit.quantity;
      
      });

      // console.log(total);
      return total;
    }

      // console.log(cart);
      
      //To update total in fixed object
    function updateTotal(){
    // debugger
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
      cart.forEach(cartite => {
        const cartItem = createCartItem(cartite.name, cartite.price, cartite.image, cartite.quantity);
        cartContainer.appendChild(cartItem);
        
      })

        
    const totalElement = document.getElementById('price');
      totalElement.textContent = `Total: ₹${calculateTotal()}`;
        
    }

    function updateQuantity(itemName, newQuantity) {
      const item = cart.find(cartItem => cartItem.name === itemName);
      if (item) {
        item.quantity = parseInt(newQuantity, 10);
      }
      updateTotal();
    }

    function createCartItem(name, price, image, quantity) {

      const existingItem = cart.find(cartItem => cartItem.name === name);
      
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
    
      const img = document.createElement('img');
      img.src = `./images/${image}`;
      cartItem.appendChild(img);
    
      const nameElement = document.createElement('div');
      nameElement.classList.add('name');
      nameElement.textContent = name;
      cartItem.appendChild(nameElement);
    
      const priceElement = document.createElement('div');
      priceElement.classList.add('price');
      priceElement.textContent = `₹${price}`;
      cartItem.appendChild(priceElement);
    
      const quantityInput = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.classList.add('quantity');
      quantityInput.value = quantity;
      quantityInput.min = 1;
      quantityInput.addEventListener('change', function () {
        // Update the quantity in the cart data when input changes
        const newQuantity = parseInt(quantityInput.value, 10);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
          updateQuantity(name, newQuantity);
        } else {
          quantityInput.value = quantity;
        }
      });

      cartItem.appendChild(quantityInput);
    
      return cartItem;
    }

          
      updateTotal();
     
      
    function displayMessage(message, duration) {
      return new Promise(resolve => {
        // Display the message
        alert(message);
    
        // Wait for the specified duration
        setTimeout(() => {
          resolve();
        }, duration);
      });
    }
    
    async function purchase() {
      try {
        await displayMessage('Successful purchase', 3000); 
        window.location.href = 'index.html'; 

      } catch (error) {
        console.error('Error occurred:', error);
      }
    }