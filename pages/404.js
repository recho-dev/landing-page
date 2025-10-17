import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Recho</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Page not found - Recho" />
      </Head>
      <Header />
      <div className="error-page">
        <h1 className="error-title">404</h1>
        <p className="error-message">This page could not be found.</p>
        <Link href="/" className="home-button">
          Go to home
        </Link>
      </div>
    </>
  )
}
