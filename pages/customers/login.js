import Head from 'next/head'
import MainLayout from '../../components/layouts/MainLayout'
import LoginForm from '../../components/Forms/LoginForm/LoginForm'

export default function () {
    return (
        <MainLayout>
            <Head>
                <title>Homebody Login Page</title>
                <meta name="description" content="Homebody Login Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='loginmain container'>
                <LoginForm />
            </div>
        </MainLayout>
    )
}