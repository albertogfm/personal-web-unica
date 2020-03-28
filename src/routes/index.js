import Header from "../public/templates/Header";
import Footer from "../public/templates/Footer"
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Formacion from "../pages/Formacion";

import "../public/styles/css/style.css"
import NavCellphone from "../public/js/NavCellphone";

import getHash from "../utils/getHash";
console.log(getHash());
const routes = {
  "/": Home,
  "/formacion":Formacion,
  "/error":Error404,
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
