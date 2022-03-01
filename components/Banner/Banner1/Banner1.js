export default function Banner1(props) {

    return (
        <div className="banner1">
            <img className="banner1__bgd" src={props.bannerbg} />
            <div className="banner1__title container">
                <h2>{props.bannerTitle}</h2>
            </div>
        </div>
    )
}