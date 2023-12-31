import "../css/Nosotros.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Nosotros = ({ logo }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="nosotros">
      <div
        className="bloque-nosotros"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img
          src={logo}
          width={100}
          alt="Logo Mis Raices"
        />
        <h2>Mis Raices</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          esse, ex quo quisquam exercitationem harum autem maiores dolore? Eum
          asperiores eos cum porro ea quae, odit et odio quidem sunt!
        </p>
      </div>

      <hr />
      <div className="fundadores">
        <h2>Fundadores</h2>
        <aside>
          <article
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <img
              src={logo}
              width={100}
              alt="Default"
            />
            <div>
              <h3>Depompa Sofia</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                reiciendis dolorum corporis ad, recusandae sunt hic ullam.
                Reiciendis, delectus illo?
              </p>
            </div>
          </article>

          <article
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <img
              src={logo}
              width={100}
              alt="Default"
            />
            <div>
              <h3>Vega Axel</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                reiciendis dolorum corporis ad, recusandae sunt hic ullam.
                Reiciendis, delectus illo?
              </p>
            </div>
          </article>
        </aside>
      </div>
    </div>
  );
};
