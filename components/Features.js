import Image from "next/image";

export default function Features() {
  return (
    <ul
      className="features"
      style={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "calc(100vw - 32px)",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <li className="feature">
        <a href="https://recho.dev/notebook" target="_blank" rel="noopener noreferrer" className="feature-title">
          Recho Notebook
        </a>
        <span className="feature-description">A Reactive Editor for Algorithms and ASCII Art</span>
        <a
          href="https://recho.dev/notebook"
          target="_blank"
          rel="noopener noreferrer"
          className="feature-image-wrapper"
          style={{background: "#4269d0"}}
        >
          <Image className="feature-image" src="/notebook.png" alt="Recho Notebook" fill style={{objectFit: "cover"}} />
        </a>
      </li>
      <li className="feature">
        <a href="https://recho.dev/multiples" target="_blank" rel="noopener noreferrer" className="feature-title">
          Recho Multiples
        </a>
        <span className="feature-description">An Exploratory Editor for Creative Coding</span>
        <a
          href="https://recho.dev/multiples"
          target="_blank"
          rel="noopener noreferrer"
          className="feature-image-wrapper"
          style={{background: "#efb118"}}
        >
          <Image
            className="feature-image"
            src="/multiples.png"
            alt="Recho Multiples"
            fill
            style={{objectFit: "cover"}}
          />
        </a>
      </li>
      <li className="feature">
        <a href="https://recho.dev/melody" target="_blank" rel="noopener noreferrer" className="feature-title">
          Recho Melody
        </a>
        <span className="feature-description">A Chronological Editor for Coding with Music</span>
        <a
          href="https://recho.dev/melody"
          target="_blank"
          rel="noopener noreferrer"
          className="feature-image-wrapper"
          style={{background: "#ff725c"}}
        >
          <Image className="feature-image" src="/melody.png" alt="Recho Melody" fill style={{objectFit: "cover"}} />
        </a>
      </li>
    </ul>
  );
}
