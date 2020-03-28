const Portafilio = () => {
    const view =
        `
        <div class="cursos_info">
            <div class="princi_box1">
                <span id="wp-photo"></span>
            </div>
            <div class="princi_box2">
                <h1 class="nombre">CURSOS EXTRACURRICULARES</h1>
                <ul class="listaInfo">
                    <li>Python Principiantes: Laboratorio Multimedia FI</li>
                    <li>Java Principiantes: Laboratorio Multimedia FI</li>
                    <li>Java Intermedio: Laboratorio Multimedia FI</li>
                    <li>Introducción a Linux:Laboratorio Multimedia FI</li>
                    <li>HTML,CSS y JS:Laboratorio Multimedia FI</li>
                    <li>Bases de Datos SQL: Laboratorio Multimedia FI</li>
                    <li>Git y Github: Laboratorio Multimedia FI</li>
                    <li>C++: Laboratorio Multimedia FI</li>
                    <li>Ciberseguridad:PROTECO</li>
                    <li>Machine Learning I:PROTECO</li>
                    <li>Programación Orientada a Objetos:ÚNICA</li>
                    <li>Base de Datos con SQL:ÚNICA</li>
                    <li>Desarrollo Web:ÚNICA</li>                    
                </ul>
            </div>
            <div class="princi_box3">
                <span id="prog-photo"></span>
            </div>         
        </div>
        
        <div class="proyecto_titulo">
            <div class="princi_box2">
                <h1 class="nombre">PORTAFOLIO DE PROYECTOS REALIZADOS</h1>
                <p>(CLick en las imágenes para descargar el proyecto)</p>
            </div>      
        </div>

        <div class="analisis_espectral_info">
            <div class="princi_box1">
            <a href="/src/public/assets/proyectos/AnálisisEspectralPython.zip" download><span id="sound-photo"></span></a>
            </div>
            <div class="princi_box2">
                <h1 class="nombre">ANÁLISIS ESPECTRAL DE SONIDOS</h1>
                <ul class="listaInfo">
                    <li>Lenguaje:Python</li>
                    <li>Descripción:Mediante el análisis espectral de un sonido, se encuentra su freciencia y se indica que nota muical es la que se esta analizando</li> 
                </ul>
            </div>      
        </div>
        
        <div class="vj_info">
            <div class="princi_box1">
                <a href="/src/public/assets/proyectos/web-videojuegos.zip" download><span id="vj-photo"></span></a>
            </div>
            <div class="princi_box2">
                <h1 class="nombre">PÁGINA DE VIDEOJUEGOS</h1>
                <ul class="listaInfo">
                    <li>Lenguaje: HTML, CSS, JavaScript & Node</li>
                    <li>Fechas: Se creó una página informativa de videojuegos</li> 
                </ul>
            </div> 
        </div>

        <div class="bf_info">
            <div class="princi_box1">
            <a href="/src/public/assets/proyectos/BlogFood-master.zip" download><span id="bf-photo"></span></a>
            </div>
            <div class="princi_box2">
                <h1 class="nombre">BLOG FOOD</h1>
                <ul class="listaInfo">
                    <li>Lenguaje: HTML & CSS</li>
                    <li>Fechas: Se desarrolló una pequeña página que simula un blog de comida</li> 
                </ul>
            </div>      
        </div> 
        
        <div class="mp3_info">
            <div class="princi_box1">
                <a href="/src/public/assets/proyectos/java_mp3.zip" download><span id="mp3-photo"></span></a>
            </div>
            <div class="princi_box2">
                <h1 class="nombre">REPRODUCTOR DE MUSICA</h1>
                <ul class="listaInfo">
                    <li>Lenguaje: Java</li>
                    <li>Fechas: Se desarrolló una pequeña aplicación que simula un dispositivo de reproducción de música</li> 
                </ul>
            </div> 
        </div> 



        <div class="inst_info">
            <div class="princi_box1">
                <a href="/src/public/assets/proyectos/Intagram.zip" download><span id="inst-photo"></span></a>
            </div>
            <div class="princi_box2">
                <h1 class="nombre">INSTAGRAM</h1>
                <ul class="listaInfo">
                    <li>Lenguaje: HTML & CSS</li>
                    <li>Fechas: Se desarrolló una pequeña página que simula instagram</li> 
                </ul>
            </div> 
        </div>

        <div class="bd_info">
            <div class="princi_box1">
                <a href="/src/public/assets/proyectos/ProyectoBD.zip" download><span id="bd-photo"></span></a>
            </div>
            <div class="princi_box2">
                <h1 class="nombre">PROYECTO BASE DE DATOS</h1>
                <ul class="listaInfo">
                    <li>Lenguaje: SQL</li>
                    <li>Fechas: Se creó la base de datos de MixUp</li> 
                </ul>
            </div> 
        </div>

        <div class="store_info">
            <div class="princi_box1">
                <a href="/src/public/assets/proyectos/TiendaPython.rar" download><span id="store-photo"></span></a>
            </div>
            <div class="princi_box2">
                <h1 class="nombre">PROYECTO TIENDITA</h1>
                <ul class="listaInfo">
                    <li>Lenguaje: Python</li>
                    <li>Fechas: Mediante la programación orientada a objetos se simuló una tiendita</li> 
                </ul>
            </div> 
        </div>

        

        .
        `;  

        
        return view;
};
export default Portafilio;
