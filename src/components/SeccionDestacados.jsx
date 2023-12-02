import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const SeccionDestacados = ({ img2, img12, img5 }) => {
  const plantas = [
    {
      id: 1,
      nombre: "Centro de mesa",
      img: img12,
      categoria: "Accesorio",
      precio: "$3.320,00",
    },
    {
      id: 2,
      nombre: "Cactus Chin",
      img: img2,
      categoria: "Interior",
      precio: "$5.320,00",
    },
    {
      id: 3,
      nombre: "Kalanchue",
      img: img5,
      categoria: "Exterior",
      precio: "$2.420,00",
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="seccion">
      <h3>Destacados</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        modi.
      </p>
      <section
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {plantas.map((planta) => {
          return (
            <article key={planta.id}>
              <img
                src={planta.img}
                alt={planta.nombre}
              />
              <cite>{planta.categoria}</cite>
              <h4
                style={{
                  textAlign: "end",
                }}
              >
                {planta.nombre}
              </h4>
              <p>{planta.precio}</p>
            </article>
          );
        })}
      </section>
      <div>
        <Link
          to={"/ViveroReact-UTN/productos"}
          className="btn btn-light"
        >
          Ver Todo ➡
        </Link>
      </div>
    </div>
  );
};
