export default function _404() {
    return (
        <div className="four0four">
            <div className="four0four__title">
                <h1>404</h1>
            </div>
            <div className="four0four__subtitle">
                <span className="four0four__subtitle__bold">The page you were looking for does not exist.</span>
                <span className="four0four__subtitle__normal">You may have mistyped the address or the page may have moved.</span>
            </div>
            <div className="four0four__buttons">
                <a href="/" className="four0four__buttons__home">Go Home</a>
                <a href="/search"className="four0four__buttons__search">Search Homebody</a>
            </div>
        </div>
    )
}