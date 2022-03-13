export default function Greeting2(props) {
    return (
        <div className="greeting2">
            <h2>{props.text}</h2>
            <span>{props.button}</span>
        </div>
    )
}