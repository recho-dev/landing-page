import {useState, useEffect, useRef} from "react";
import Link from "next/link";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleComingSoon = () => {
    alert("Stay tuned, coming soon!");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div>
        <Link href="/" className="logo">
          Recho
        </Link>
      </div>
      <div>
        <span className="nav-item mobile-hidden">
          <a href="https://recho.dev/notebook" target="_blank" rel="noopener noreferrer">
            Notebook
          </a>
        </span>
        <span className="nav-item mobile-hidden" onClick={handleComingSoon}>
          Multiples
        </span>
        <span className="nav-item mobile-hidden" onClick={handleComingSoon}>
          Melody
        </span>
        <div className="more-menu-container" ref={dropdownRef}>
          <button className="more-button" onClick={toggleDropdown}>
            ☰
          </button>
          <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
            <a className="dropdown-item" href="https://recho.dev/notebook" target="_blank" rel="noopener noreferrer">
              Notebook
            </a>
            <span className="dropdown-item" onClick={handleComingSoon}>
              Multiples
            </span>
            <span className="dropdown-item" onClick={handleComingSoon}>
              Melody
            </span>
          </div>
        </div>
        <span className="nav-item">
          <a href="https://github.com/recho-dev" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </span>
      </div>
    </header>
  );
}
