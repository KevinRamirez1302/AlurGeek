import { productService } from "../services/productos-service.js";

const crearNuevaLinea = (name,imgURL,price,descripcion,id) => {
    const div = document.createElement('div');
    const contenido = 
    `
    <img class="img-template" src=".${imgURL}" alt="">
            <div class="text-product">
                <h1>${name}</h1>
                <P class="precio">${price}$</P>
                <p class="descripcion">${descripcion}</p>
            </div>
    `

    div.innerHTML = contenido;

    
      return div
  
  }


const product = document.querySelector('[data-template]');


function mostrar (){
    const url = new URL (window.location);
    const id = url.searchParams.get('id');


    productService
  .mostrar(id)
  .then(({name,imgURL,price,descripcion,id}) =>{
     const newCard = crearNuevaLinea(name,imgURL,price,descripcion,id);
     product.appendChild(newCard)
  }
  )

}


 
mostrar()