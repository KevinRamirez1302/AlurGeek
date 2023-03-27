const listaProductos = () => fetch('http://localhost:3000/producto-star').then(respuesta => respuesta.json());

const loginCliente = (email,pass) =>{
    return fetch('http://localhost:3000/usuarioNuevo', {
          method:"POST",
          headers:{
               'Content-Type':'application/json'
          },
          body: JSON.stringify({email,pass})
     })
}


const agregarProductoStar = (name,price,imgURL,descripcion) =>{
     return fetch('http://localhost:3000/producto-star', {
           method:"POST",
           headers:{
                'Content-Type':'application/json'
           },
           body: JSON.stringify({name,price,imgURL,descripcion})
      })
 }

 

const eliminarProducto = (id)=>{
     return fetch(`http://localhost:3000/producto-star/${id}`,{
          method: "DELETE"
     })
}



const detalleCliente = (id) =>{
     return fetch (`http://localhost:3000/producto-star/${id}`).then ((respuesta) => respuesta.json())
   }



const actualizarCliente = (name,imgURL,price,descripcion,id) =>{
     return fetch(`http://localhost:3000/producto-star/${id}`,{
       method: 'PUT',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify ({name,imgURL,price,descripcion})
     }).then(respuesta => console.log (respuesta))
 } 

 const mostrar = (id) => {
     return fetch (`http://localhost:3000/producto-star/${id}`).then ((respuesta) => respuesta.json())
 }



export const productService  ={
     listaProductos,
     loginCliente,
     eliminarProducto,
     agregarProductoStar,
     actualizarCliente,
     detalleCliente,
     mostrar

}