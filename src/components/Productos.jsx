import { lazy, useEffect, useState } from "react";
import "../css/SeccionProductos.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Cargando } from "./Cargando";
export const Productos = ({ plantas, carrito, setCarrito }) => {
  const [mostrar, setMostrar] = useState(false);
  useEffect(() => {
    Aos.init();
    setMostrar(false);
    setTimeout(() => {
      setMostrar(true);
    }, 2000);
  }, []);

  return (
    <>
      <div
        className="productos"
        style={{
          minHeight: "100vh",
        }}
      >
        <h1>Productos</h1>
        <section className="seccion-productos">
          {!mostrar ? (
            <Cargando></Cargando>
          ) : (
            plantas.map((planta) => {
              return (
                <article
                  data-aos="fade-up"
                  data-aos-duration="2500"
                  key={planta.id}
                >
                  <img
                    loading={lazy}
                    src={planta.img}
                    alt={planta.nombre}
                  />
                  <cite>{planta.categoria}</cite>
                  <h4>{planta.nombre}</h4>
                  <p>$ {planta.precio}</p>
                  <button
                    onClick={() => {
                      setCarrito([...carrito, planta]);
                    }}
                    className="btn btn-sm btn-primary"
                  >
                    Agregar
                  </button>
                </article>
              );
            })
          )}
        </section>
      </div>
    </>
  );
};
