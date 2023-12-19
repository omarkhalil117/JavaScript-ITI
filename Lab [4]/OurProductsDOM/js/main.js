var list = document.getElementById("itemsList")
var products ; 
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data => products = data )
.then( () => Object.values(products).forEach(
    el => {
        list.innerHTML += `
        <div class="product">
        <img src='${el.image}'>
        <p>${el.description}</p>
        <p>${el.price}</p>
        <p>${el.category}</p>
        </div>
        `
    }
)) 




// Object.values(products).forEach(el => {

//     list.innerHTML += `
//     <div class='product'>
//     <img src='${el.image}'>
//     <p>${el.description}</p>
//     <p>${el.price}</p>
//     <p>${el.category}</p>
//     </div>
//     `
// });

