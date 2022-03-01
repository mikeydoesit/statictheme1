import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout';
import _404 from '../components/404/_404'

export default function () {
    return (
        <MainLayout>
            <Head>
                <title>Homebody 404 Page</title>
                <meta name="description" content="404 homebody page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <_404 />
        </MainLayout>
    )
}