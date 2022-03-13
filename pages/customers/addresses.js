import Head from 'next/head'
import CustomerLayout from '../../components/layouts/CustomerLayout'
import Greeting2 from '../../components/Greeting/Greeting2/Greeting2'
import AddressCard from '../../components/Addresses/Addresses2/Addresses2'

export default function () {
    return (
        <CustomerLayout>
            <Head>
                <title>Homebody Saved Addresses Page</title>
                <meta name="description" content="Homebody Saved Addresses Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='accountpagemain'>
                <Greeting2 text="Saved addresses" button="Add Address"/>
                <div className="addressList">
                    <AddressCard 
                        name="Mr Michael Squire Obeng"
                        one="18 Rochford"
                        two="Griffin Road"
                        city="London"
                        postcode="N17 6HX"
                    />
                    <AddressCard 
                        name="Miss Alicia Soraya Martin"
                        one="132 Sherringham Avenue"
                        two="Tottenham"
                        city="London"
                        postcode="N17 9RR"
                    />
                    <AddressCard 
                        name="Miss Suzannah Attafuah"
                        one="18 William Guy Gardens"
                        two="Talwin Street"
                        city="London"
                        postcode="E3 3LF"
                    />
                    <AddressCard 
                        name="Mrs Jennifer Jackson"
                        one="74 Victoria Crescent"
                        two="Tottenham"
                        city="London"
                        postcode="N15 5LU"
                    />
                </div>
            </div>
        </CustomerLayout>
    )
}