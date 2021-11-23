export default function Header1() {
    return (
        <header className="header header1">
            <div className="header1__header-main">
                <div className="header1__menu-toggle-wrapper">
                    <input className="menu-toggle" type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="header1__mobile-navigation">
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
                </div>
                <div className="logo-wrapper">
                    <a href="/link">LOGO</a>
                </div>

                <div className="search-wrapper">
                    <input type="text" placeholder="search"/>
                    <a href="/link"><i className="fas fa-search"></i></a>
                </div>
                
                <div className="user-wrapper">
                    <div className="search">
                        <input className="checkbox" type="checkbox" />
                        <input className="search-box" type="text"/>
                        <div className="search-btn">
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    <a className="account-btn" href="/account">ACCOUNT</a>
                    <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
                </div>
            </div>
            <div className="header1__navigation">
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
        </header>
    )
}