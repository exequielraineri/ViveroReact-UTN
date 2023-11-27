import "../css/Inicio.css";

import { SeccionCategorias } from "./SeccionCategorias";
import { SeccionDestacados } from "./SeccionDestacados";
const Banner = (props) => {
  return (
    <div className="banner">
      <p>{props.p1}</p>
      <p>{props.p2}</p>
    </div>
  );
};

export const Inicio = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>
            Vivero <span>Mis Raices</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <SeccionCategorias></SeccionCategorias>


      <Banner p1="Transforma tu entorno" p2="Con nuestras hermosas plantas" ></Banner>
      <SeccionDestacados></SeccionDestacados>
    </>
  );
};
