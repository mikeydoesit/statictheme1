import Header1 from "../Header/Header1/Header1";
import Header2 from "../Header/Header2/Header2";
import Header3 from "../Header/Header3/Header3";
import Footer from "../Footer/Footer"

export default function MainLayout(props) {
    return (
        <>
            <Header1 />
            <Header2 />
            <Header3 />
                <main>{props.children}</main>
            <Footer />
        </>
    )
}