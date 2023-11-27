import './css/App.css';
import { Inicio } from './components/Inicio';
import { Productos } from './components/Productos';
import { Carrito } from './components/Carrito';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Nosotros } from './components/Nosotros';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [plantas, setPlantas] = useState([
    {
      id: 1,
      categoria: "Exterior",
      img: "src/assets/img/Plantas/escila.jpg",
      nombre: "Escilla",
      precio: 4500.00,
    },
    {
      id: 2,
      categoria: "Exterior",
      img: "src/assets/img/Plantas/cactus_chin.jpg",
      nombre: "Cactus Chin",
      precio: 4500.00,
    },
    {
      id: 3,
      categoria: "Exterior",
      img: "src/assets/img/Plantas/echinocereus_coccineus.jpg",
      nombre: "Echionocerus Coccineus",
      precio: 3500.00,
    },
    {
      id: 4,
      categoria: "Exterior",
      img: "src/assets/img/Plantas/cactus_cebra.jpg",
      nombre: "Cactus Cebra",
      precio: 4500,
    },
    {
      id: 5,
      categoria: "Exterior",
      img: "src/assets/img/Plantas/kalanchoe.jpeg",
      nombre: "Kalanchoe",
      precio: 6500,
    },
    {
      id: 6,
      categoria: "Interior",
      img: "src/assets/img/Plantas/singonio.jpg",
      nombre: "Singonio",
      precio: 14500,
    },
    {
      id: 7,
      categoria: "Interior",
      img: "src/assets/img/Plantas/maihueniopsis_molinensis.jpg",
      nombre: "Maihueniopsis Molinesis",
      precio: 3500,
    },
    {
      id: 8,
      categoria: "Interior",
      img: "src/assets/img/Plantas/malvon_rosado.jpeg",
      nombre: "Malvon Rosado",
      precio: 6500,
    },
    {
      id: 9,
      categoria: "Interior",
      img: "src/assets/img/Plantas/ombligo_de_reina.jpg",
      nombre: "Ombligo de Reina",
      precio: 6450,
    },
    {
      id: 10,
      categoria: "Interior",
      img: "src/assets/img/Plantas/tradescantia_sillamontana.jpg",
      nombre: "Tradescantia Sillamontana",
      precio: 3200,
    },
    {
      id: 11,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20210715_115738.jpg",
      nombre: "Porta Aros",
      precio: 4500,
    },
    {
      id: 12,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20210715_120447.jpg",
      nombre: "Centro de Mesa",
      precio: 3500,
    },
    {
      id: 13,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20210901_144651.jpg",
      nombre: "Imanes",
      precio: 2500,
    },
    {
      id: 14,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20210901_144943.jpg",
      nombre: "Porta Saumerios",
      precio: 5000,
    },
    {
      id: 15,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20210901_102859.jpg",
      nombre: "Clips",
      precio: 1000,
    },
    {
      id: 16,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20220225_112423.jpg",
      nombre: "Porta Saumerio",
      precio: 2500,
    },
    {
      id: 17,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20220715_115139.jpg",
      nombre: "Porta Vela",
      precio: 7500,
    },
    {
      id: 18,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20220715_121652.jpg",
      nombre: "Llamador de Angel",
      precio: 1500,
    },

  ]);




  const [carrito, setCarrito] = useState([]);



  return (
    <div className='aplicacion'>
      <Menu carrito={carrito}></Menu>
      <Routes>
        <Route path='/' element={<Inicio></Inicio>} ></Route>
        <Route path='/productos' element={<Productos plantas={plantas} setPlantas={setPlantas} carrito={carrito} setCarrito={setCarrito}></Productos>} ></Route>
        <Route path='/carrito' element={<Carrito carrito={carrito}></Carrito>} ></Route>
        <Route path='/nosotros' element={<Nosotros></Nosotros>} ></Route>

      </Routes>
      <Footer></Footer>
    </div >
  )
}

export default App
