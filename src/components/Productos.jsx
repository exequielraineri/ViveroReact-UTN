import { lazy } from "react";
import "../css/SeccionProductos.css";
export const Productos = ({ plantas, carrito, setCarrito }) => {


  return (
    <>
      <div className='productos'>
        <h1>Productos</h1>
        <section className='seccion-productos'>
          {
            plantas.map((planta) => {
              return <article key={planta.id}>
                <img
                  loading={lazy}
                  src={planta.img}
                  alt={planta.nombre}
                />
                <cite>{planta.categoria}</cite>
                <h4>{planta.nombre}</h4>
                <p>$ {planta.precio}</p>
                <button onClick={() => {
                  setCarrito([...carrito, planta])
                }} className='btn btn-sm btn-primary'>Agregar</button>
              </article>


            })
          }
        </section>
      </div>
    </>
  )
}
