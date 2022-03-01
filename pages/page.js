import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout';
import Banner1 from "../components/Banner/Banner1/Banner1";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Hero3 from "../components/Hero/Hero3/Hero3"
import TwoColumn from '../components/Twocolumn/Twocolumn1/TwoColumn';

export default function Page() {
    return (
        <MainLayout>
            <Head>
                <title>Homebody Default Page</title>
                <meta name="description" content="Default homebody page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner1 bannerbg={'https://www.accraecommerce.com/htmlemailimages/decorbg.png'} bannerTitle={'default page'} />
            <div className="container">
                <Breadcrumbs firstCrumb={'Page'}/>
                <TwoColumn />
            </div>
            <Hero3 />
        </MainLayout>
    )
}