export default function Orders1() {
    return (
        <div className="orders1">
            <div className="orders1__title">
                <h2 className="orders1__title__text">Latest Order</h2>
                <a href="/order" className="orders1__title__link">View all orders</a>
            </div>
            <div className="orders1__latest">
                <span className="orders1__latest__id">#0332</span>
                <span className="orders1__latest__date">29 January 2022</span>
                <span className="orders1__latest__total">$198.07</span>
            </div>
        </div>
    )
}