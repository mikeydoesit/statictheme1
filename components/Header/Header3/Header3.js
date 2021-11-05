export default function Header3() {
    return (
        <header className="header header3">
            <div className="header3__promotion-banner">
                <span>Free shipping on all orders over $60</span>
            </div>
            <div className="header3__header-main">
                <div className="nav-logo">
                    <div className="logo-wrapper">
                        <a href="/link">LOGO</a>
                    </div>
                    <div className="navigation-wrapper">
                        <a href="/link">LINK</a>
                        <a href="/link">LINK</a>
                        <a href="/link">LINK</a>
                    </div>
                </div>
                <div className="user-wrapper">
                    <div className="search-wrapper">
                        <input type="text" placeholder="SEARCH"/>
                        <a href="/link"><i className="fas fa-search"></i></a>
                    </div>
                    <a href="/account">ACCOUNT</a>
                    <a href="/cart">CART (0)</a>
                </div>
            </div>
        </header>
    )
}