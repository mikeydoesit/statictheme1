export default function Addresses2(props) {
    return (
        <div className="addresses2">
            <div className="addresses2__details">
                <span className="addresses2__details__name">{props.name}</span>
                <span className="addresses2__details__one">{props.one}</span>
                <span className="addresses2__details__two">{props.two}</span>
                <span className="addresses2__details__city">{props.city}</span>
                <span className="addresses2__details__postcode">{props.postcode}</span>
            </div>

            <div className="addresses2__updel">
                <a href="#" className="addresses2__updel__edit">
                    <span>Edit</span>
                    <i className="fas fa-pencil-alt"></i>
                </a>
                <a href="#" className="addresses2__updel__delete">
                    <span>Delete</span>
                    <i className="fas fa-trash"></i>
                </a>
            </div>
        </div>
    )
}