import { useState } from 'react';
import './navbar.css'

const Navbar = ({children}) => {
    const [query, setQuery] = useState("");

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
        />
        {children}
      </nav>
  )
}

export default Navbar