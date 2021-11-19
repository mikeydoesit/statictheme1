export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="footer__links">
                                        <span className="footer__column-title">About</span>
                                        <a className="footer__link">Link</a>
                                        <a className="footer__link">Link</a>
                                        <a className="footer__link">Link</a>
                                        <a className="footer__link">Link</a>
                                        <a className="footer__link">Link</a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer__links">
                                        <span className="footer__column-title">Help</span>
                                        <a className="footer__link">Link</a>
                                        <a className="footer__link">Link</a>
                                        <a className="footer__link">Link</a>
                                        <a className="footer__link">Link</a>
                                        <a className="footer__link">Link</a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer__links">
                                        <span className="footer__column-title">Quick Links</span>
                                        <a className="footer__link">Link</a>
                                        <a className="footer__link">Link</a>
                                        <a className="footer__link">Link</a>
                                        <a className="footer__link">Link</a>
                                        <a className="footer__link">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <span className="footer__column-title">Follow us</span>
                            <p className="footer__paragraph">Don't miss out! Join us to get special offers.</p>
                            <div className="footer__email-input">
                                <input type="text" placeholder="johndoe@gmail.com"/>
                                <a className="footer__email-input__icon">
                                    <i className="far fa-envelope fa-lg"></i> 
                                </a>
                            </div>
                            <div className="footer__social-icons">
                                <a className="footer__social-icons__icon">
                                    <i className="fab fa-instagram fa-lg"></i>
                                </a>
                                <a className="footer__social-icons__icon">
                                    <i className="fab fa-facebook-f fa-lg"></i>
                                </a>
                                <a className="footer__social-icons__icon">
                                    <i className="fab fa-youtube fa-lg"></i>
                                </a>
                                <a className="footer__social-icons__icon">
                                    <i className="fab fa-pinterest-p fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-bar">
                <div className="footer-bar__logo">
                    <a href="/link">LOGO</a>
                </div>
                <div className="footer-bar__copyright">
                    <span>&copy; 2022 Company Name</span>
                </div>
            </div>
        </>
        
    )
}