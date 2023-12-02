import "../css/Inicio.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { SeccionCategorias } from "./SeccionCategorias";
import { SeccionDestacados } from "./SeccionDestacados";
import { useEffect } from "react";
const Banner = (props) => {
  return (
    <div className="banner">
      <p>{props.p1}</p>
      <p>{props.p2}</p>
    </div>
  );
};

export const Inicio = ({ cactus, singonio, imgAux, img2, img12, img5 }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="hero">
        <div
          className="hero-text"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1>
            Vivero <span>Mis Raices</span>
          </h1>
          <p>
            Descubre la magia de la naturaleza en nuestro vivero. Encuentra la
            planta perfecta para transformar tu hogar o jardín.
          </p>
        </div>
      </div>

      <SeccionCategorias
        cactus={cactus}
        singonio={singonio}
        imgAux={imgAux}
      ></SeccionCategorias>

      <Banner
        p1="Transforma tu entorno"
        p2="Con nuestras hermosas plantas"
      ></Banner>
      <SeccionDestacados
        img2={img2}
        img12={img12}
        img5={img5}
      ></SeccionDestacados>
    </>
  );
};
