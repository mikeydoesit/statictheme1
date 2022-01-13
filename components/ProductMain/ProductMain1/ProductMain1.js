import Script from 'next/script'

export default function ProductMain1() {
    return (
        <div className="productmain1">
            <div className="productmain1__images">
                <div className="productmain1__thumbnail">
                    <div className="productmain1__thumbnail__item">
                        <img src="https://accraecommerce.com/htmlemailimages/frame11.png" />
                    </div>
                    <div className="productmain1__thumbnail__item">
                        <img src="https://accraecommerce.com/htmlemailimages/frame12a.png" />
                    </div>
                    <div className="productmain1__thumbnail__item">
                        <img src="https://accraecommerce.com/htmlemailimages/frame12.png" />
                    </div>
                </div>
                <div className="productmain1__feature" data-flickity='{ "cellAlign": "center", "wrapAround": true, "draggable": false, "pageDots": false, "arrowShape": "M2.87868 47.8787C1.70711 49.0503 1.70711 50.9497 2.87868 52.1213L21.9706 71.2132C23.1421 72.3848 25.0416 72.3848 26.2132 71.2132C27.3848 70.0416 27.3848 68.1421 26.2132 66.9706L9.24264 50L26.2132 33.0294C27.3848 31.8579 27.3848 29.9584 26.2132 28.7868C25.0416 27.6152 23.1421 27.6152 21.9706 28.7868L2.87868 47.8787ZM96 47L5 47L5 53L96 53L96 47Z" }'>
                    <div className="productmain1__feature__item">
                        <img src="https://accraecommerce.com/htmlemailimages/frame11.png" />
                    </div>
                    <div className="productmain1__feature__item">
                        <img src="https://accraecommerce.com/htmlemailimages/frame12.png" />
                    </div>
                    <div className="productmain1__feature__item">
                        <img src="https://accraecommerce.com/htmlemailimages/frame12a.png" />
                    </div>
                </div>

            </div>
            <div className="productmain1__details">
                <h2 className="productmain1__details__title">Oceanus</h2>
                <div className='productmain1__details__ratings'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <h4 className="productmain1__details__price">$49.99</h4>
                <div className="productmain1__details__quantity">
                    <span className="productmain1__details__quantity__minus">
                        -
                    </span>
                    <span className="productmain1__details__quantity__amount">
                        4
                    </span>
                    <span className="productmain1__details__quantity__plus">
                        +
                    </span>
                </div>
                <div className="productmain1__details__addToCart">
                    <span className="productmain1__details__addToCart__button">
                        Add to Cart
                    </span>
                    <span className="productmain1__details__addToWishlist__button">
                        <i className="far fa-heart fa-lg"></i>
                    </span>
                </div>
                <div className="productmain1__details__accordion">
                    <div className="productmain1__details__accordion__description">
                        <div className="productmain1__details__accordion__description__button">
                            <span className="productmain1__details__accordion__description__button__title">Description</span>
                            <span className="productmain1__details__accordion__description__button__icon"><i className="fas fa-grip-horizontal"></i></span>
                        </div>
                    </div>
                    <div className="productmain1__details__accordion__extrainfo">
                        <div className="productmain1__details__accordion__extrainfo__button">
                            <span className="productmain1__details__accordion__extrainfo__button__title">Description</span>
                            <span className="productmain1__details__accordion__extrainfo__button__icon"><i className="fas fa-grip-horizontal"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"/>
        </div>
    )
}