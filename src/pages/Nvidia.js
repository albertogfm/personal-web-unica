const Nvidia = () => {
    const view =
        `
        <div class="Title"><h1>Noticias del Mundo Gaming</h1></div>
        <div class="news_one-block">
            <h1 id="tlt">Nvidia y Asus anuncian el primer monitor de 360Hz</h1>
            <span id="nvidia-photo"></span>
            <div id="-text">
                <p>Este monitor es pensando en los eSports, Nvidia trabajo con Asus para poder lograr desarrollar un nuevo “procesador avanzado G-Sync”. El monitor tiene una respuesta de 2.8ms y resolución 1080p.</p>
            </div>
            <div id="n-vid">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wT8oK_pEpd8?start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>    
       </div>
        
        
        `;  
        return view;
};

export default Nvidia;