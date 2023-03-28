import { productService } from "../services/productos-service.js";



const form = document.querySelector('[data-form-agregar]');

form.addEventListener('submit', async(evento) =>{

    evento.preventDefault();

    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const url = document.querySelector('[data-url]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    
        await productService.agregarProductoStar(nombre,precio,url,descripcion).then(()=>{
            window.location.href = '../screens/producto-agregado.html'
        })
        

    
    

    



    });