import { useState } from "react";
import "../css/Carrito.css";
export const Carrito = (props) => {

  const [total, setTotal] = useState(parseFloat(1040).toFixed(2));


  function carritoVacio() {
    if (props.carrito.length < 1) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className='carrito'>
      <div className="carrito-section">

        {carritoVacio() ? <p className="text-center">Carrito Vacio</p> : (props.carrito.map((planta) => {
          return <div className="carrito-article" key={planta.id}>
            <img src={planta.img} alt={planta.nombre} />
            <div>

              <h3>{planta.nombre}</h3>
              <p>Cantidad: 1</p>
              <p>Precio:$ {planta.precio}</p>
              <p>Subtotal: $ {planta.precio}</p>
            </div>
          </div>
        }))}






      </div>

      {carritoVacio() ? "" : (
        <div className="pie-carrito">

          <p>Total $ {total}</p>
          <button className="btn btn-success">Comprar</button>
        </div>
      )}


    </div>
  )
}
