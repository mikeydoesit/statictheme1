import Head from 'next/head'
import CustomerLayout from '../../components/layouts/CustomerLayout'
import Greeting1 from '../../components/Greeting/Greeting1/Greeting1'
import Orders2 from '../../components/Orders/Orders2/Orders2'

export default function () {
    return (
        <CustomerLayout>
            <Head>
                <title>Homebody Order Page</title>
                <meta name="description" content="Homebody Order Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='orderpagemain'>
                <Greeting1 text="Order #0383"  total="Total: $198.07"/>
                <Orders2 />
            </div>
        </CustomerLayout>
    )
}