import Head from 'next/head'
import MainLayout from '../../components/layouts/MainLayout'
import ActivationForm from '../../components/Forms/ActivationForm/ActivationForm'

export default function () {
    return (
        <MainLayout>
            <Head>
                <title>Homebody Account Activation Page</title>
                <meta name="description" content="Homebody Account Activation Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='activationmain container'>
                <ActivationForm />
            </div>
        </MainLayout>
    )
}