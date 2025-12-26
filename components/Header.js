"use client";

import {useState, useEffect, useRef} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

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

  const isNewsPage = pathname.startsWith("/news");

  return (
    <header className="header">
      <div className="left-nav">
        <Link href="/" className="logo">
          Recho
        </Link>
        <Link href="/news" className={`nav-item ${isNewsPage ? "active" : ""}`}>
          News
        </Link>
      </div>
      <div>
        <span className="nav-item mobile-hidden">
          <a href="https://recho.dev/notebook" target="_blank" rel="noopener noreferrer">
            Notebook
          </a>
        </span>
        <span className="nav-item mobile-hidden">
          <a href="https://recho.dev/multiples" target="_blank" rel="noopener noreferrer">
            Multiples
          </a>
        </span>
        <span className="nav-item mobile-hidden">
          <a href="https://recho.dev/melody" target="_blank" rel="noopener noreferrer">
            Melody
          </a>
        </span>
        <div className="more-menu-container" ref={dropdownRef}>
          <button className="more-button" onClick={toggleDropdown}>
            ☰
          </button>
          <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
            <a className="dropdown-item" href="https://recho.dev/notebook" target="_blank" rel="noopener noreferrer">
              Notebook
            </a>
            <a className="dropdown-item" href="https://recho.dev/multiples" target="_blank" rel="noopener noreferrer">
              Multiples
            </a>
            <a className="dropdown-item" href="https://recho.dev/melody" target="_blank" rel="noopener noreferrer">
              Melody
            </a>
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
