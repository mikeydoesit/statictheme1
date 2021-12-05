export default function Header2() {
    return (
        <header className="header header2">
            <div className="header2__header-main">
                <div className="navigation-wrapper">
                    <a href="/link" className="header1__expanding-link">LINK <i className="fas fa-chevron-down"></i>
                        <ul className="header1__sub-links">
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                        </ul>
                    </a>
                    <a href="/link">LINK</a>
                    <a href="/link">LINK</a>
                </div>
                <div className="logo-wrapper">
                    <a href="/link">LOGO</a>
                </div>

                
                
                <div className="user-wrapper">
                    <a href="/link"><i class="fas fa-search"></i></a>
                    <a href="/account"><i class="fas fa-user"></i></a>
                    <a href="/cart"><i class="fas fa-shopping-cart"></i></a>
                </div>
            </div>
            
        </header>
    )
}