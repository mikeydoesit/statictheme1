export default function Orders2() {

    return (
        <>
        <div className="orders2__wrapper__content">
            <ul className="orders2__wrapper__content__list">
                <li>
                    
                        <div className="orders2__wrapper__content__list__item">
                            <div className="orders2__wrapper__content__list__item__image">
                                <img src="https://accraecommerce.com/htmlemailimages/frame12.png"/>
                            </div>
                            <div className="orders2__wrapper__content__list__item__info">
                                <h6>Oceanus</h6>
                                <div className="orders2__wrapper__content__list__item__info__price">
                                    <span>
                                        $50.59
                                    </span>
                                </div>
                                <div className="orders2__wrapper__content__list__item__info__quantity">
                                    <span>
                                        Quantity: 1
                                    </span>
                                </div>
                            </div>
                        </div>
                </li>
                <li>
                    
                        <div className="orders2__wrapper__content__list__item">
                            <div className="orders2__wrapper__content__list__item__image">
                                <img src="https://accraecommerce.com/htmlemailimages/decor3.png"/>
                            </div>
                            <div className="orders2__wrapper__content__list__item__info">
                                <h6>Noctua</h6>
                                <div className="orders2__wrapper__content__list__item__info__price">
                                    <span>
                                        $39.99
                                    </span>
                                </div>
                                <div className="orders2__wrapper__content__list__item__info__quantity">
                                    <span>
                                    Quantity: 2
                                    </span>
                                </div>
                            </div>
                        </div>
                </li>
                <li>
                    
                        <div className="orders2__wrapper__content__list__item">
                            <div className="orders2__wrapper__content__list__item__image">
                                <img src="https://accraecommerce.com/htmlemailimages/decor7.png"/>
                            </div>
                            <div className="orders2__wrapper__content__list__item__info">
                                <h6>Ostreae Testa</h6>
                                <div className="orders2__wrapper__content__list__item__info__price">
                                    <span>
                                        $7.50
                                    </span>
                                </div>
                                <div className="orders2__wrapper__content__list__item__info__quantity">
                                    <span>
                                    Quantity: 5
                                    </span>
                                </div>
                            </div>
                        </div>
                </li>
                <li>
                    
                        <div className="orders2__wrapper__content__list__item">
                            <div className="orders2__wrapper__content__list__item__image">
                                <img src="https://accraecommerce.com/htmlemailimages/decor12.png"/>
                            </div>
                            <div className="orders2__wrapper__content__list__item__info">
                                <h6>Cactus</h6>
                                <div className="orders2__wrapper__content__list__item__info__price">
                                    <span>
                                        $15.00
                                    </span>
                                </div>
                                <div className="orders2__wrapper__content__list__item__info__quantity">
                                    <span>
                                    Quantity: 2
                                    </span>
                                </div>
                            </div>
                        </div>
                </li>
            </ul>
            <div className="orders2__wrapper__content__details">
                <div className="orders2__wrapper__content__details__summary">
                    <div className="orders2__wrapper__content__details__summary__header">
                        <h5 className="orders2__wrapper__content__details__summary__header__title">
                            Order Summary
                        </h5>
                        <span className="orders2__wrapper__content__details__summary__header__status">Delivered</span>
                    </div>
                    <div className="orders2__wrapper__content__details__summary__content">
                        <div className="orders2__wrapper__content__details__summary__content__item">
                            <span className="orders2__wrapper__content__details__summary__content__item__title">Order Created</span>
                            <span className="orders2__wrapper__content__details__summary__content__item__value">Thu, 24 March 2022</span>
                        </div>
                        <div className="orders2__wrapper__content__details__summary__content__item">
                            <span className="orders2__wrapper__content__details__summary__content__item__title">Order Time</span>
                            <span className="orders2__wrapper__content__details__summary__content__item__value">06.25 AM</span>
                        </div>
                        <div className="orders2__wrapper__content__details__summary__content__item">
                            <span className="orders2__wrapper__content__details__summary__content__item__title">Subtotal</span>
                            <span className="orders2__wrapper__content__details__summary__content__item__value">$198.07</span>
                        </div>
                        <div className="orders2__wrapper__content__details__summary__content__item">
                            <span className="orders2__wrapper__content__details__summary__content__item__title">Delivery Fee</span>
                            <span className="orders2__wrapper__content__details__summary__content__item__value">$0.00</span>
                        </div>
                    </div>
                </div>
                <div className="orders2__wrapper__content__details__address">
                    <div className="orders2__wrapper__content__details__address__header">
                        <h5 className="orders2__wrapper__content__details__address__header__title">
                            Delivery Address
                        </h5>
                    </div>
                    <div className="orders2__wrapper__content__details__address__content">
                        <div className="orders2__wrapper__content__details__address__content__item">
                            <span className="orders2__wrapper__content__details__address__content__item__title">Address Line:</span>
                            <span className="orders2__wrapper__content__details__address__content__item__value">18 Rochford</span>
                        </div>
                        <div className="orders2__wrapper__content__details__address__content__item">
                            <span className="orders2__wrapper__content__details__address__content__item__title">Street Name:</span>
                            <span className="orders2__wrapper__content__details__address__content__item__value">Griffin Road</span>
                        </div>
                        <div className="orders2__wrapper__content__details__address__content__item">
                            <span className="orders2__wrapper__content__details__address__content__item__title">Postcode:</span>
                            <span className="orders2__wrapper__content__details__address__content__item__value">N17 6HX</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="orders2__wrapper__footer">
            <div className="orders2__wrapper__footer__subtotal">
                <span className="orders2__wrapper__footer__subtotal__title">Total:</span>
                <span className="orders2__wrapper__footer__subtotal__amount">$198.07</span>
            </div>
        </div>   */}
        </>
    )
}