import Header from "../public/templates/Header";
import Footer from "../public/templates/Footer"
import Home from "../pages/Home";
import Notes from "../pages/Notes";
import Projects from "../pages/Projects";
import Social from "../pages/Social";
import Error404 from "../pages/Error404";
import Nvidia from "../pages/Nvidia";
import Halo from "../pages/Halo";
import Sony from "../pages/Sony";
import Cod from "../pages/Cod";
import Mario from "../pages/Mario";
import Consoles from "../pages/Consoles";
import "../public/styles/css/style.css"
import NavCellphone from "../public/js/NavCellphone";

import getHash from "../utils/getHash";
console.log(getHash());
const routes = {
  "/": Home,
  "/social-media": Social,
  "/projects": Projects,
  "/notes": Notes,
  "/nvidia":Nvidia,
  "/halo":Halo,  
  "/sony":Sony,
  "/cod": Cod,
  "/mario": Mario,
  "/consoles":Consoles
};

const router = async () => {
    const header = null || document.getElementById("header");
    const footer = null || document.getElementById("footer");
    const content = null || document.getElementById("container");

    let hash = getHash();
    if(hash !== 'menu'){
        console.log(hash);
        if(hash === "/"){
            console.log("Entro");
            header.innerHTML = await Header();
            footer.innerHTML = await Footer();
            let render = routes[hash] ? routes[hash] : Error404();
            content.innerHTML = await render();
        }
        header.innerHTML = await Header();
        footer.innerHTML = await Footer();
        let route = "/"+hash;
        let render = routes[route] ? routes[route] : Error404();
        content.innerHTML = await render();
    }
    
    
};

export default router;