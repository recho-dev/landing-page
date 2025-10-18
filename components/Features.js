"use client";

export default function Features() {
  const handleComingSoon = () => {
    alert("Stay tuned, coming soon!");
  };

  const handleNotebookClick = () => {
    window.open("https://recho.dev/notebook", "_blank");
  };

  return (
    <ul className="features">
      <li className="feature" onClick={handleNotebookClick}>
        <span className="feature-title">Recho Notebook</span>
        <span className="feature-description">A Reactive Editor for Algorithms and ASCII Art</span>
        <img className="feature-image" src="/notebook.png" alt="Recho Notebook" style={{background: "#4269d0"}} />
      </li>
      <li className="feature" onClick={handleComingSoon}>
        <span className="feature-title">Recho Multiples</span>
        <span className="feature-description">An Exploratory Editor for Creative Coding</span>
        <span className="feature-image" style={{background: "#efb118"}}>
          <span className="feature-image-text">⏳ 🌲</span>
        </span>
      </li>
      <li className="feature" onClick={handleComingSoon}>
        <span className="feature-title">Recho Melody</span>
        <span className="feature-description">A Chronological Editor for Coding with Music</span>
        <span className="feature-image" style={{background: "#ff725c"}}>
          <span className="feature-image-text">⏳ 🎵</span>
        </span>
      </li>
    </ul>
  );
}
