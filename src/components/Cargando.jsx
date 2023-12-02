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
    ></article>
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
