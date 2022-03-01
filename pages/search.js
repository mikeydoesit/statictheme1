import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import Banner1 from '../components/Banner/Banner1/Banner1'
import BreadCrumbs from '../components/Breadcrumbs/Breadcrumbs'
import CollectionGrid from '../components/Collections/Collectiongrid/Collectiongrid'
import SearchResultsPanel from '../components/SearchResultsPanel/SearchResultsPanel'

export default function Search() {
    return (
        <MainLayout>
            <Head>
                <title>Homebody Search Page</title>
                <meta name="description" content="Search for products on homebody" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner1 bannerTitle={'Search'} bannerbg={'https://www.accraecommerce.com/htmlemailimages/homedecor.png'}/>
            <div className="container">
                <BreadCrumbs firstCrumb={'Search'}/>
                <SearchResultsPanel />
                <CollectionGrid />
            </div>
        </MainLayout>
    )
}