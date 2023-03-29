import { productService } from "../services/productos-service.js";

console.log(productService);

const crearNuevaLinea = (name,imgURL,price,id) => {
    const div = document.createElement('div');
    const contenido = 
    `
    <a href='./screens/product-template.html?id=${id}'><img class="imgURL" src=".${imgURL}" alt="">
    <p>${name}</p>
    <p>$ ${price}</p>
    <div class="admin-icon">
    <button class="button-img editar"><a href="./screens/editar.html?id=${id}"><img class="icon-img" src="../images/lapiz.png" alt="EDITAR"></a></button>
      <button id ="${id}" class="button-img borrar"><img class="icon-img" src="../images/borrar.png" alt="borrar"></button>
     </div></a>
    `

    div.innerHTML = contenido;

   const btn = div.querySelector('.borrar');
    btn.addEventListener('click', async ()=>{
      const id = btn.id;

     await productService.eliminarProducto(id)
     
    
    })
    
      return div
  
  }




const product = document.querySelector('[data-admin]');


productService
  .listaProductosAadmin()
  .then((data =>{
    data.forEach(({name,imgURL,price,id}) => {
    const newCard = crearNuevaLinea(name,imgURL,price,id);
     product.appendChild(newCard)
      
  });
  }));

 
