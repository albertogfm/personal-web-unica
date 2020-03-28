const Header = () => {
    const view =
        `
           
            <nav>
                <ul>
                    <li><a href="/"><span class="home_icon"></span>Información Personal</a></li>
                    <li><a href="#/formacion"><span class="study_icon"></span>Formación</a></li>
                    <li><a href="/"><span class="projects_icon"></span>Portafolio</a></li>  
                </ul>
            </nav>
        
        `;  
        return view;
};

export default Header;
