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

    //To get the id from the div
    const output = document.querySelector("#card");

    //Asyncronus display funtion to render the data on webpage
    const dispData= async () => {
        console.log(localStorage.getItem('Product'));
        if(localStorage.getItem('Product')){
            
            // output.innerHTML= "";
            let dataDisplay = JSON.parse(localStorage.getItem('Product')).map(data => {
            const{ name, price, image } = data;
            return `
                    <img src="images/./$data.image">
                    <h4>data.name</h4>
                    <p>data.price</p>
                    `
            }).join("");
            output.innerHTML=dataDisplay;     
        }
    }


    // calling declared function
    dispData();


    // {$data.image}{$data.price}{$data.name}
    
 // output.innerHTML += `
            //     <div class="card"><img src="images/{$data.image}"><h4>{$data.name}</h4>
            //     <p>{$data.price}</p></div>
            // `;