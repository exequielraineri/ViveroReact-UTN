import { Link } from "react-router-dom";
import "../css/SeccionDestacados.css";
export const SeccionDestacados = () => {

  const plantas = [{
    id: 1,
    nombre: "Centro de mesa",
    img: "src/assets/img/Artesanias/IMG_20210715_120447.jpg",
    categoria: "Accesorio",
    precio: "$3.320,00"
  },
  {
    id: 2,
    nombre: "Cactus Chin",
    img: "src/assets/img/Plantas/cactus_chin.jpg",
    categoria: "Interior",
    precio: "$5.320,00"
  },
  {
    id: 3,
    nombre: "Kalanchue",
    img: "src/assets/img/Plantas/kalanchoe.jpeg",
    categoria: "Exterior",
    precio: "$2.420,00"

  }];


  return (
    <div className="destacados">
      <h3>Destacados</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reprehenderit, modi.
      </p>
      <section>

        {
          plantas.map((planta) => {
            return <article key={planta.id}>
              <img
                src={planta.img}
                alt={planta.nombre}
              />
              <cite>{planta.categoria}</cite>
              <h4>{planta.nombre}</h4>
              <p>{planta.precio}</p>
            </article>
          })

        }


      </section>
      <div>
        <Link to="/productos" className="btn btn-light">Ver Todo ➡</Link>
      </div>
    </div>
  )
}
