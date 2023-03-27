import { productService } from "../services/productos-service.js";


const form = document.querySelector('[data-form]');

form.addEventListener('submit', (evento) =>{

    evento.preventDefault();

    const email = document.querySelector('[data-email]').value;
    const pass = document.querySelector('[data-password]').value;

    console.log(email + '-' + pass);

    productService.loginCliente(email,pass).then((respuesta) =>{
        window.location.href = '/screens/administrador.html'
    }).cath(err=>{
        console.log(err)
    })

})

