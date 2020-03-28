const Home = () => {
    const view =
        `
        <div class="Title"><h1>Noticias del Mundo Gaming</h1></div>
        <div class="news_one-block">
            <h1 id="tlt">Nvidia y Asus anuncian el primer monitor de 360Hz</h1>
            <a href="#/nvidia"><span  id="nvidia-photo"></span></a>
        </div>
        <div class="news_two-block">
            <h1 id="tlt">3 Juegos que esperamos en este 2020</h1>
            <a href="#/halo"><span id="halo-photo"></span></a>
        </div>
        <div class="news_three-block">
            <h1 id="tlt">Sony lanza trailer de 8 minutos de Death Stranding</h1>
            <a href="#/sony"><span id="sony-photo"></span></a>
        </div>
        <div class="news_four-block">
            <h1 id="tlt">Ya está disponible para descargar ‘Call of Duty: Mobile’ en iOS y Android: ¿El mejor shooter en smartphones?</h1>
            <a href="#/cod"><span id="cod-photo"></span></a>
        </div>
        <div class="news_five-block">
            <h1 id="tlt">Mario Kart Tour ya está disponible… y acompañado por una suscripción del mismo precio que Apple Arcade</h1>
            <a href="#/mario"><span id="mario-photo"></span></a>
        </div>
        
        `;  
        return view;
};
export default Home;