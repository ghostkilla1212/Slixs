const productGrid = document.getElementById('product-grid') /*spricht das product grid an*/

fetch('https://fakestoreapi.com/products') /*fragt den server nach produkten ab*/
.then(Response => Response.json()) /*wandelt die antwort vom server in ein format um das javascript versteht json*/
.then(products => { /*gibt uns die liste mit den pordukten*/
    console.log(products)
})