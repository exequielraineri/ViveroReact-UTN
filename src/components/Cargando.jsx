import { useDebugValue, useEffect } from "react";
import "../css/cargando.css";
import Aos from "aos";
import "aos/dist/aos.css";
const ArticuloCargando = () => {
  return (
    <article
      data-aos="fade-up"
      data-aos-duration="1000"
      className="articulo-cargando"
    >
      <div className="imagen"></div>
      <div className="cite"></div>
      <div className="parrafo"></div>
      <div className="boton"></div>
    </article>
  );
};

export const Cargando = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <ArticuloCargando></ArticuloCargando>
      <ArticuloCargando></ArticuloCargando>
      <ArticuloCargando></ArticuloCargando>
      <ArticuloCargando></ArticuloCargando>
      <ArticuloCargando></ArticuloCargando>
      <ArticuloCargando></ArticuloCargando>
      <ArticuloCargando></ArticuloCargando>
      <ArticuloCargando></ArticuloCargando>
      <ArticuloCargando></ArticuloCargando>
      <ArticuloCargando></ArticuloCargando>
      <ArticuloCargando></ArticuloCargando>
    </>
  );
};
