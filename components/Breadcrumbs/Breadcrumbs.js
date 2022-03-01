export default function Breadcrumbs(props) {
    return (
        <div className="breadcrumbs">
            <span>Home</span>
            <span className="breadcrumbs__seperator">&#62;</span>
            <span>{props.firstCrumb}</span>
            <span className="breadcrumbs__seperator">&#62;</span>
            <span>{props.secondCrumb}</span>
        </div>
    )
}