import Head from 'next/head'
import CustomerLayout from '../../components/layouts/CustomerLayout'
import Greeting1 from '../../components/Greeting/Greeting1/Greeting1'
import CustomerInfo1 from '../../components/CustomerInfo/CustomerInfo1/CustomerInfo1'
import Orders1 from '../../components/Orders/Orders1/Orders1'
import Addresses1 from '../../components/Addresses/Addresses1/Addresses1'

export default function () {
    return (
        <CustomerLayout>
            <Head>
                <title>Homebody Customer Account Page</title>
                <meta name="description" content="Homebody Customer Account Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='accountpagemain'>
                <Greeting1 />
                <CustomerInfo1 />
                <Orders1 />
                <Addresses1 />
            </div>
        </CustomerLayout>
    )
}