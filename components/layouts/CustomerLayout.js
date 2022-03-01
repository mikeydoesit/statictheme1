import Header1 from "../Header/Header1/Header1";
import Header2 from "../Header/Header2/Header2";
import Header3 from "../Header/Header3/Header3";
import Sidemenu1 from "../Sidemenu/Sidemenu1/Sidemenu1"
import Footer from "../Footer/Footer";

export default function CustomerLayout(props) {
    return (
        <div className="fixed-nav">
            <Header1 />
            {/* <Header2 />
            <Header3 /> */}
            
                <main className="dashboard">
                    <Sidemenu1 />
                    {props.children}
                </main>
            <Footer />
        </div>
    )
}