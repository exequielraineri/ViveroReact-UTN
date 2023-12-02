import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <p>
        Proyecto creado por{" "}
        <Link
          style={{
            color: "#f0f0f0",
            fontWeight: "bold",
            textDecoration: "none",
          }}
          to={"https://github.com/axelvega483"}
          target="_blank"
        >
          Vega Axel
        </Link>{" "}
        y{" "}
        <Link
          style={{
            color: "#f0f0f0",
            fontWeight: "bold",
            textDecoration: "none",
          }}
          to={"https://exequielraineri.github.io/portafolio-web/"}
          target="_blank"
        >
          Raineri Exequiel
        </Link>
      </p>
      <p>Derechos Reservados 2023</p>
    </footer>
  );
};
