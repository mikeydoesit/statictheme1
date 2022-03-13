export default function Greeting1(props) {
    return (
        <div className="greeting1">
            <h2>{props.text}</h2>
            <h2>{props.total}</h2>
        </div>
    )
}