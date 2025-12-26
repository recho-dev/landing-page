import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/Hero.css";
import "../styles/Features.css";
import "../styles/Error.css";
import Header from "../components/Header";

export const metadata = {
  title: "Recho",
  description: "Light Domain-Specific Code Editors for Coders and Artists",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="content">
        <div className="content-wrapper">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
