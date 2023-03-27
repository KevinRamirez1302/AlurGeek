import { productService } from "../services/productos-service.js";

const form = document.querySelector('[data-form-editar]')

const obtenerInformacion = async () =>{
    const url = new URL (window.location);
    const id = url.searchParams.get('id');

    const name = document.querySelector('[data-editar-nombre]');
    const imgURL = document.querySelector('[data-editar-url]');
    const price = document.querySelector('[data-editar-precio]');
    const descripcion = document.querySelector('[data-editar-descripcion]');


    const perfil = await productService.detalleCliente(id);
        name.value = perfil.name;
        imgURL.value = perfil.imgURL;
        price.value = perfil.price;
        descripcion.value = perfil.descripcion;
        
   
}

obtenerInformacion();




form.addEventListener('submit', (evento)=>{
    evento.preventDefault()

    const url = new URL (window.location);
    const id = url.searchParams.get('id');

    const name = document.querySelector('[data-editar-nombre]').value;
    const imgURL = document.querySelector('[data-editar-url]').value;
    const price = document.querySelector('[data-editar-precio]').value;
    const descripcion = document.querySelector('[data-editar-descripcion]').value;


    productService.actualizarCliente(name,imgURL,price,descripcion,id).then (()=>{
        window.location.href = '/screens/administrador.html'
    })


})
