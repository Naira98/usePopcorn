import { useEffect, useRef } from "react";
import "./navbar.css";
import useKey from "../../Hooks/useKey";

const Navbar = ({ children, query, setQuery }) => {
  const searchEl = useRef(null);

  useKey('Enter', ()=> {
    if (document.activeElement === searchEl.current) return;

    searchEl.current.focus();
        setQuery("");
  })

  useEffect(() => {
    searchEl.current.focus();
  }, []);

  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={searchEl}
      />
      {children}
    </nav>
  );
};

export default Navbar;
