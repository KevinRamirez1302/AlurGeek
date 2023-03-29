import { productService } from "../services/productos-service.js";

console.log(productService);

const crearNuevaLinea = (name,imgURL,price,id) => {
    const div = document.createElement('div');
    const contenido = 
    `
    <a href='./screens/product-template.html?id=${id}'><img class="imgURL" src="${imgURL}" alt="">
    <p>${name}</p>
    <p>$ ${price}</p>
    </a>
    `
  
    div.innerHTML = contenido;

    
      return div
  
  }




const product = document.querySelector('[data-products]');


productService
  .listaProductos()
  .then((data =>{
    data.forEach(({name,imgURL,price,id}) => {
    const newCard = crearNuevaLinea(name,imgURL,price,id);
     product.appendChild(newCard)
      
  });
  }));

 
