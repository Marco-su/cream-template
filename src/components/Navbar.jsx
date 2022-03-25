import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > window.innerHeight * 0.8) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={isDark ? "dark" : ""}>
      <div className="cursive logo">Nice</div>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/info">Development</NavLink>
        </li>
        <li>
          <NavLink to="#"></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
