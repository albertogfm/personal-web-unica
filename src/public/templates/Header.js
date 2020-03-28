const Header = () => {
    const view =
        `
        
            <div class="menu_bar" id="menu_bar_id">
                <a href="#"  class="bt-menu"><span class="menu_icon"></span>Menú</a>
            </div>
    
            <nav>
                <ul>
                    <li><a href="/"><span class="news_icon"></span>Noticias</a></li>
                    <li><a href="#/top/"><span class="top_icon"></span>Top 10</a></li>
                    <li><a href="#/consoles/"><span class="console_icon"></span>Consolas<span class="caret icon-arrow-down6"></span></a></li>  
                </ul>
            </nav>
        
        `;  
        return view;
};

export default Header;