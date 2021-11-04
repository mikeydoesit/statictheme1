export default function Header1() {
    return (
        <header className="header header1">
            <div className="header1__promotion-banner">
                <span>Free shipping on all orders over $60</span>
            </div>
            <div className="header1__header-main">
                <div className="logo-wrapper">
                    <a href="/link">LOGO</a>
                </div>

                <div className="search-wrapper">
                    <input type="text" placeholder="SEARCH"/>
                    <a href="/link"><i class="fas fa-search"></i></a>
                </div>
                
                <div className="user-wrapper">
                    <a href="/account">ACCOUNT</a>
                    <a href="/cart"><i class="fas fa-shopping-cart"></i></a>
                </div>
            </div>
            <div className="header1__navigation">
                <a href="/link">LINK</a>
                <a href="/link">LINK</a>
                <a href="/link">LINK</a>
            </div>
        </header>
    )
}