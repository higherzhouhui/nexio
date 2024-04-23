import Head from 'next/head'
import Header from '../components/Header'
import '@/styles/globals.css'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
    return (
        <div>
            <div className="app">
                <Head>
                    <title>Nexio</title>
                    <meta name="description" content="Nexio" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"></meta>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        </div>
    )
}
