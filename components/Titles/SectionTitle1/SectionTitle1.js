export default function SectionTitle1(props) {
    return (
        <div className="sectiontitle container">
            <h2 className={props.textalign}>{props.title}</h2>
        </div>
    )
}