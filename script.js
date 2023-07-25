const submitted = e => {
    
    //To assign the data came from the textfields to the variables 
    var name = document.getElementById('name').value;
    var price = document.getElementById('number').value;
    var img = document.getElementById('img').value;
    // alert(name);

    //To store the data in the local storage
    const Product=JSON.parse(localStorage.getItem('Product')) || [];
    Product.push({
        name: name,
        price: price,
        image: img
    })

    
    const jsonObject=JSON.stringify(Product);
    localStorage.setItem('Product', jsonObject);
    console.log(localStorage.getItem('Product'));

    
    e.preventDefault();
    //  var name = localStorage.setItem("name", name);
    //  var price= localStorage.setItem("price", price);
    //  var img= localStorage.setItem("img", img);

    }


    function createCard(name, price, image) {
        const card = document.createElement('div');
        card.classList.add('card');
      
        const img = document.createElement('img');
        img.src = image;
        card.appendChild(img);
      
        const nameElement = document.createElement('div');
        nameElement.classList.add('name');
        nameElement.textContent = name;
        card.appendChild(nameElement);
      
        const priceElement = document.createElement('div');
        priceElement.classList.add('price');
        priceElement.textContent = `$${price}`;
        card.appendChild(priceElement);
      
        return card;
      }
    //To get the id from the div
    const output = document.querySelector("#card");

    //Asyncronus display funtion to render the data on webpage
    const dispData= async () => {

        //To get the id from the div
        const output = document.getElementById("card");

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
                console.log(item);
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


    
            // {$data.image}{$data.price}{$data.name}
            // output.innerHTML += `
            //     <div class="card"><img src="images/{$data.image}"><h4>{$data.name}</h4>
            //     <p>{$data.price}</p></div>
            // `;