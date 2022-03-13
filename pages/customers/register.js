import Head from 'next/head'
import MainLayout from '../../components/layouts/MainLayout'
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm'

export default function () {
    return (
        <MainLayout>
            <Head>
                <title>Homebody Register Page</title>
                <meta name="description" content="Homebody Register Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='registermain container'>
                <RegisterForm />
            </div>
        </MainLayout>
    )
}