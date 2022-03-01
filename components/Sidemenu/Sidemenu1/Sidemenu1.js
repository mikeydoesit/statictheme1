export default function Sidemenu1() {
    return (
        <div className="sidemenu1">
            <ul className="sidemenu1__list">
                <li className="sidemenu1__list__item">
                    <a>Account</a>
                </li>
                <li className="sidemenu1__list__item">
                    <a>Addresses</a>
                </li>
                <li className="sidemenu1__list__item">
                    <a>Change Password</a>
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