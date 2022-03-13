export default function Sidemenu1() {
    return (
        <div className="sidemenu1">
            <ul className="sidemenu1__list">
                <li className="sidemenu1__list__item">
                    <a href="/customers/account">Account</a>
                </li>
                <li className="sidemenu1__list__item">
                    <a href="/customers/addresses">Addresses</a>
                </li>
                <li className="sidemenu1__list__item">
                    <a href="/customers/reset_password">Change Password</a>
                </li>
            </ul>
            <div className="sidemenu1__help">
                <span className="sidemenu1__help__button">
                    Help
                </span>
            </div>
        </div>
    )
}