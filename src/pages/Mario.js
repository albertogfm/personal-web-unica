const Mario = () => {
    const view =
        `
        <div class="Title"><h1>Noticias del Mundo Gaming</h1></div>
        <div class="news_five-block">
            <h1 id="tlt">Mario Kart Tour ya está disponible… y acompañado por una suscripción del mismo precio que Apple Arcade</h1>
            <a href="#/mario"><span id="mario-photo"></span></a>
        
            <div id="-text">
                <p>A partir de hoy, 25 de septiembre –que es para cuando fue anunciado Mario Kart Tour hace ya un mes–, podremos descargar el juego en iOS y Android, por el que ya estábamos un buen tiempo esperando. Pero lo que no sabíamos es que iba a estar acompañado por una opcional suscripción llamada “Gold Pass”.

                La “Gold Pass” te otorga varios artículos e insignias dentro del juego mientras vas avanzando, y también desbloquea un modo de juego más rápido. Nintendo no nos deja muy claro para qué son estos artículos e insignias en el sitio del juego. Tendremos un período de prueba de dos semanas, y después de eso tendremos que pagar $4.99 al mes.</p>
            </div>
            <ul>
                <li><a href="https://mariokarttour.com/en-US/goldpass">Sitio Mario Kart</a></li>
            </ul>
            <div id="-text">
                <p>También habrás notado que es el mismo precio que Apple Arcade, la ya muy buen sabida plataforma de juegos de la manzana. Tal vez, para algunos, Mario Kart Tour será una increíble experiencia a la que valga la pena suscribirse, pero acá en MuyTec recomendamos que pienses mejor antes de gastar tu dinero.</p>
            </div>
        </div>
        `;  
        return view;
};

export default Mario;