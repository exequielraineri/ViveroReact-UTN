import "./css/App.css";
import { Inicio } from "./components/Inicio";
import { Productos } from "./components/Productos";
import { Carrito } from "./components/Carrito";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Nosotros } from "./components/Nosotros";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import img1 from "./assets/img/Plantas/escila.jpg";
import img2 from "./assets/img/Plantas/cactus_chin.jpg";
import img3 from "./assets/img/Plantas/echinocereus_coccineus.jpg";
import img4 from "./assets/img/Plantas/cactus_cebra.jpg";
import img5 from "./assets/img/Plantas/kalanchoe.jpeg";
import img6 from "./assets/img/Plantas/singonio.jpg";
import img7 from "./assets/img/Plantas/maihueniopsis_molinensis.jpg";
import img8 from "./assets/img/Plantas/malvon_rosado.jpeg";
import img9 from "./assets/img/Plantas/ombligo_de_reina.jpg";
import img10 from "./assets/img/Plantas/tradescantia_sillamontana.jpg";
import img11 from "./assets/img/Artesanias/IMG_20210715_115738.jpg";
import img12 from "./assets/img/Artesanias/IMG_20210715_120447.jpg";
import img13 from "./assets/img/Artesanias/IMG_20210901_144651.jpg";
import img14 from "./assets/img/Artesanias/IMG_20210901_144943.jpg";
import img15 from "./assets/img/Artesanias/IMG_20210901_102859.jpg";
import img16 from "./assets/img/Artesanias/IMG_20220225_112423.jpg";
import img17 from "./assets/img/Artesanias/IMG_20220715_115139.jpg";
import img18 from "./assets/img/Artesanias/IMG_20220715_121652.jpg";

function App() {
  const [plantas, setPlantas] = useState([
    {
      id: 1,
      categoria: "Exterior",
      img: img1,
      nombre: "Escilla",
      precio: 4500.0,
    },
    {
      id: 2,
      categoria: "Exterior",
      img: img2,
      nombre: "Cactus Chin",
      precio: 4500.0,
    },
    {
      id: 3,
      categoria: "Exterior",
      img: img3,
      nombre: "Echionocerus Coccineus",
      precio: 3500.0,
    },
    {
      id: 4,
      categoria: "Exterior",
      img: img4,
      nombre: "Cactus Cebra",
      precio: 4500,
    },
    {
      id: 5,
      categoria: "Exterior",
      img: img5,
      nombre: "Kalanchoe",
      precio: 6500,
    },
    {
      id: 6,
      categoria: "Interior",
      img: img6,
      nombre: "Singonio",
      precio: 14500,
    },
    {
      id: 7,
      categoria: "Interior",
      img: img7,
      nombre: "Maihueniopsis Molinesis",
      precio: 3500,
    },
    {
      id: 8,
      categoria: "Interior",
      img: img8,
      nombre: "Malvon Rosado",
      precio: 6500,
    },
    {
      id: 9,
      categoria: "Interior",
      img: img9,
      nombre: "Ombligo de Reina",
      precio: 6450,
    },
    {
      id: 10,
      categoria: "Interior",
      img: img10,
      nombre: "Tradescantia Sillamontana",
      precio: 3200,
    },
    {
      id: 11,
      categoria: "Accesorio",
      img: img11,
      nombre: "Porta Aros",
      precio: 4500,
    },
    {
      id: 12,
      categoria: "Accesorio",
      img: img12,
      nombre: "Centro de Mesa",
      precio: 3500,
    },
    {
      id: 13,
      categoria: "Accesorio",
      img: img13,
      nombre: "Imanes",
      precio: 2500,
    },
    {
      id: 14,
      categoria: "Accesorio",
      img: img14,
      nombre: "Porta Saumerios",
      precio: 5000,
    },
    {
      id: 15,
      categoria: "Accesorio",
      img: img15,
      nombre: "Clips",
      precio: 1000,
    },
    {
      id: 16,
      categoria: "Accesorio",
      img: img16,
      nombre: "Porta Saumerio",
      precio: 2500,
    },
    {
      id: 17,
      categoria: "Accesorio",
      img: img17,
      nombre: "Porta Vela",
      precio: 7500,
    },
    {
      id: 18,
      categoria: "Accesorio",
      img: img18,
      nombre: "Llamador de Angel",
      precio: 1500,
    },
  ]);

  const [carrito, setCarrito] = useState([]);

  return (
    <div className="aplicacion">
      <Menu carrito={carrito}></Menu>
      <Routes>
        <Route
          path={"/ViveroReact-UTN"}
          element={
            <Inicio
              cactus={img4}
              singonio={img6}
              imgAux={img11}
              img2={img2}
              img12={img12}
              img5={img5}
            ></Inicio>
          }
        ></Route>
        <Route
          path={"/ViveroReact-UTN/productos"}
          element={
            <Productos
              plantas={plantas}
              setPlantas={setPlantas}
              carrito={carrito}
              setCarrito={setCarrito}
            ></Productos>
          }
        ></Route>
        <Route
          path={"/ViveroReact-UTN/carrito"}
          element={<Carrito carrito={carrito}></Carrito>}
        ></Route>
        <Route
          path={"/ViveroReact-UTN/nosotros"}
          element={<Nosotros></Nosotros>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
