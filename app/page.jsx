import Hero from "../components/Hero";
import Features from "../components/Features";

export const metadata = {
  title: "Recho",
  description: "Light Domain-Specific Code Editors for Coders and Artists",
};

export default function Home() {
  return (
    <main>
      <div className="content-wrapper">
        <Hero />
      </div>
      <Features />
      <div className="cta-section content-wrapper">
        <p className="announcement">We want to live in the editor forever!</p>
        <a href="https://recho.dev/notebook" target="_blank" rel="noopener noreferrer" className="get-started-button">
          Get Started
        </a>
      </div>
    </main>
  );
}
