export default function Sidemenu1() {
    return (
        <div className="sidemenu1">
            <ul className="sidemenu1__list">
                <li className="sidemenu1__list__item">
                    <a className="sidemenu1__list__item__text" href="/customers/account">Account</a>
                    <a className="sidemenu1__list__item__icon" href="/customers/account"><i className="far fa-user-circle"></i></a>
                </li>
                <li className="sidemenu1__list__item">
                    <a className="sidemenu1__list__item__text" href="/customers/addresses">Addresses</a>
                    <a className="sidemenu1__list__item__icon" href="/customers/addresses"><i className="far fa-address-book"></i></a>
                </li>
                <li className="sidemenu1__list__item">
                    <a className="sidemenu1__list__item__text" href="/customers/reset_password">Change Password</a>
                    <a className="sidemenu1__list__item__icon" href="/customers/reset_password"><i className="fas fa-key"></i></a>
                </li>
            </ul>
            <div className="sidemenu1__help">
                <span className="sidemenu1__help__text">
                    Help
                </span>
                <a className="sidemenu1__help__icon"><i className="far fa-question-circle"></i></a>
            </div>
        </div>
    )
}