export default function Greeting2(props) {
    return (
        <div className="greeting2">
            <h2>{props.text}</h2>
            <div>
                <span>{props.button}</span>
                <span><i className="fas fa-plus"></i></span>
            </div>
        </div>
    )
}