export default function Cart1() {
    return (
        <div className="cart1">
            <div className="cart1__overlay"></div>
            <div className="cart1__wrapper">
                <div className="cart1__wrapper__header">
                    <h6>Basket</h6>
                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                </div>
                <div className="cart1__wrapper__content">
                    <ul className="cart1__wrapper__content__list">
                        <li>
                            <a className="cart1__wrapper__content__list__link">
                                <div className="cart1__wrapper__content__list__link__item">
                                    <div className="cart1__wrapper__content__list__link__item__image">
                                        <img src="https://accraecommerce.com/htmlemailimages/frame12.png"/>
                                    </div>
                                    <div className="cart1__wrapper__content__list__link__item__info">
                                        <h6>Oceanus</h6>
                                        <div className="cart1__wrapper__content__list__link__item__info__price">
                                            <span>
                                                $50.59
                                            </span>
                                        </div>
                                        <div className="cart1__wrapper__content__list__link__item__info__quantity">
                                            <span className="cart1__wrapper__content__list__link__item__info__quantity__decrement">
                                                -
                                            </span>
                                            <span>
                                                1
                                            </span>
                                            <span className="cart1__wrapper__content__list__link__item__info__quantity__increment">
                                                +
                                            </span>
                                        </div>
                                        <div className="cart1__wrapper__content__list__link__item__delete">
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </div>
                                        
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="cart1__wrapper__content__list__link">
                                <div className="cart1__wrapper__content__list__link__item">
                                    <div className="cart1__wrapper__content__list__link__item__image">
                                        <img src="https://accraecommerce.com/htmlemailimages/decor3.png"/>
                                    </div>
                                    <div className="cart1__wrapper__content__list__link__item__info">
                                        <h6>Noctua</h6>
                                        <div className="cart1__wrapper__content__list__link__item__info__price">
                                            <span>
                                                $39.99
                                            </span>
                                        </div>
                                        <div className="cart1__wrapper__content__list__link__item__info__quantity">
                                            <span className="cart1__wrapper__content__list__link__item__info__quantity__decrement">
                                                -
                                            </span>
                                            <span>
                                                2
                                            </span>
                                            <span className="cart1__wrapper__content__list__link__item__info__quantity__increment">
                                                +
                                            </span>
                                        </div>
                                        <div className="cart1__wrapper__content__list__link__item__delete">
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </div>
                                        
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="cart1__wrapper__content__list__link">
                                <div className="cart1__wrapper__content__list__link__item">
                                    <div className="cart1__wrapper__content__list__link__item__image">
                                        <img src="https://accraecommerce.com/htmlemailimages/decor7.png"/>
                                    </div>
                                    <div className="cart1__wrapper__content__list__link__item__info">
                                        <h6>Ostreae Testa</h6>
                                        <div className="cart1__wrapper__content__list__link__item__info__price">
                                            <span>
                                                $7.50
                                            </span>
                                        </div>
                                        <div className="cart1__wrapper__content__list__link__item__info__quantity">
                                            <span className="cart1__wrapper__content__list__link__item__info__quantity__decrement">
                                                -
                                            </span>
                                            <span>
                                                5
                                            </span>
                                            <span className="cart1__wrapper__content__list__link__item__info__quantity__increment">
                                                +
                                            </span>
                                        </div>
                                        <div className="cart1__wrapper__content__list__link__item__delete">
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="cart1__wrapper__content__list__link">
                                <div className="cart1__wrapper__content__list__link__item">
                                    <div className="cart1__wrapper__content__list__link__item__image">
                                        <img src="https://accraecommerce.com/htmlemailimages/decor12.png"/>
                                    </div>
                                    <div className="cart1__wrapper__content__list__link__item__info">
                                        <h6>Cactus</h6>
                                        <div className="cart1__wrapper__content__list__link__item__info__price">
                                            <span>
                                                $15.00
                                            </span>
                                        </div>
                                        <div className="cart1__wrapper__content__list__link__item__info__quantity">
                                            <span className="cart1__wrapper__content__list__link__item__info__quantity__decrement">
                                                -
                                            </span>
                                            <span>
                                                2
                                            </span>
                                            <span className="cart1__wrapper__content__list__link__item__info__quantity__increment">
                                                +
                                            </span>
                                        </div>
                                        <div className="cart1__wrapper__content__list__link__item__delete">
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </div>
                                        
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="cart1__wrapper__footer">
                    <div className="cart1__wrapper__footer__subtotal">
                        <span className="cart1__wrapper__footer__subtotal__title">Subtotal:</span>
                        <span className="cart1__wrapper__footer__subtotal__amount">$198.07</span>
                    </div>
                    <div className="cart1__wrapper__footer__checkout">
                        <span className="cart1__wrapper__footer__checkout__btn">Checkout</span>
                    </div>
                </div>
            </div>
        </div>
    )
}