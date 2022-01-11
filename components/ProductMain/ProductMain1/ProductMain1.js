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
                <div className="productmain1__feature" data-flickity='{ "cellAlign": "center", "wrapAround": true, "draggable": false, "pageDots": false }'>
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
                            <span className="productmain1__details__accordion__description__button__icon"><i class="fas fa-grip-horizontal"></i></span>
                        </div>
                    </div>
                    <div className="productmain1__details__accordion__extrainfo">
                        <div className="productmain1__details__accordion__extrainfo__button">
                            <span className="productmain1__details__accordion__extrainfo__button__title">Description</span>
                            <span className="productmain1__details__accordion__extrainfo__button__icon"><i class="fas fa-grip-horizontal"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"/>
        </div>
    )
}