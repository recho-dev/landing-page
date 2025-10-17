import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recho</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Light Domain-Specific Code Editors for Coders and Artists" />
      </Head>
      <Header />
      <main className="main">
        <Hero />
        <Features />
        <div className="cta-section">
          <p className="announcement">We want to live in the editor forever!</p>
          <a 
            href="https://recho.dev/notebook" 
            target="_blank" 
            rel="noopener noreferrer"
            className="get-started-button"
          >
            Get Started
          </a>
        </div>
      </main>
    </>
  );
}
