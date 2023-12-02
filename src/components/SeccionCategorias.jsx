import { useEffect } from "react";
import "../css/SeccionCategorias.css";
import { ArticuloCategoria } from "./ArticuloCategoria";
import Aos from "aos";
import "aos/dist/aos.css";
export const SeccionCategorias = ({ cactus, singonio, imgAux }) => {
  const categorias = [
    {
      id: 1,
      nombre: "Exterior",
      img: cactus,
    },
    {
      id: 2,
      nombre: "Interoir",
      img: singonio,
    },
    {
      id: 3,
      nombre: "Accesorios",
      img: imgAux,
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="categorias">
      <h3>Categorias</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        modi.
      </p>
      <section
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {categorias.map((cat) => {
          return (
            <ArticuloCategoria
              categoria={cat}
              key={cat.id}
            ></ArticuloCategoria>
          );
        })}
      </section>
    </div>
  );
};
