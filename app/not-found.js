import Link from 'next/link'
import Header from '../components/Header'

export const metadata = {
  title: "404 - Page Not Found | Recho",
  description: "Page not found - Recho",
};

export default function NotFound() {
  return (
    <>
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

