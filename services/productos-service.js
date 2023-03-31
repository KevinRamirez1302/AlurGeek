const listaProductos = () => fetch('https://my-json-server.typicode.com/KevinRamirez1302/AlurGeek/producto-star').then(respuesta => respuesta.json());

const listaProductosAadmin = () => fetch('https://my-json-server.typicode.com/KevinRamirez1302/AlurGeek/producto-star').then(respuesta => respuesta.json());

const loginCliente = (email,pass) =>{
    return fetch('https://my-json-server.typicode.com/KevinRamirez1302/AlurGeek/usuarioNuevo', {
          method:"POST",
          headers:{
               'Content-Type':'application/json'
          },
          body: JSON.stringify({email,pass})
     })
}


const agregarProductoStar = (name,price,imgURL,descripcion) =>{
     return fetch('https://my-json-server.typicode.com/KevinRamirez1302/AlurGeek/producto-star', {
           method:"POST",
           headers:{
                'Content-Type':'application/json'
           },
           body: JSON.stringify({name,price,imgURL,descripcion})
      })
 }

 

const eliminarProducto = (id)=>{
     return fetch(`https://my-json-server.typicode.com/KevinRamirez1302/AlurGeek/producto-star/${id}`,{
          method: "DELETE"
     })
}



const detalleCliente = (id) =>{
     return fetch (`https://my-json-server.typicode.com/KevinRamirez1302/AlurGeek/producto-star/${id}`).then ((respuesta) => respuesta.json())
   }



const actualizarCliente = (name,imgURL,price,descripcion,id) =>{
     return fetch(`https://my-json-server.typicode.com/KevinRamirez1302/AlurGeek/producto-star/${id}`,{
       method: 'PUT',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify ({name,imgURL,price,descripcion,id})
     }).then(respuesta => console.log (respuesta))
 } 

 const mostrar = (id) => {
     return fetch (`https://my-json-server.typicode.com/KevinRamirez1302/AlurGeek/producto-star/${id}`).then ((respuesta) => respuesta.json())
 }



export const productService  ={
     listaProductos,
     listaProductosAadmin,
     loginCliente,
     eliminarProducto,
     agregarProductoStar,
     actualizarCliente,
     detalleCliente,
     mostrar,

}