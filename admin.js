const submitted = e => {
    
    //To assign the data came from the textfields to the variables 
    var name = document.getElementById('name').value;
    var price = document.getElementById('number').value;
    var img = document.getElementById('img').value;

    //To store the data in the local storage
    const Product=JSON.parse(localStorage.getItem('Product')) || [];
    Product.push({
        name: name,
        price: price,
        image: img
    })

    //Storing using setItem 
    const jsonObject=JSON.stringify(Product);
    localStorage.setItem('Product', jsonObject);
    e.preventDefault();
   
}