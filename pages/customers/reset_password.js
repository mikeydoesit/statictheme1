import Head from 'next/head'
import MainLayout from '../../components/layouts/MainLayout'
import ResetPasswordForm from '../../components/Forms/ResetPasswordForm/ResetPasswordForm'

export default function () {
    return (
        <MainLayout>
            <Head>
                <title>Homebody Password Reset Page</title>
                <meta name="description" content="Homebody Password Reset Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='passwordresetmain container'>
                <ResetPasswordForm />
            </div>
        </MainLayout>
    )
}