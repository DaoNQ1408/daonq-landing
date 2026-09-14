import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="site-nav">
      <NavLink to="/" className="site-nav__brand">
        <span>DQ</span>
        <strong>DAO.NQ</strong>
      </NavLink>
      <nav className="site-nav__links" aria-label="Primary navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          Projects
        </NavLink>
      </nav>
      <Button
        variant="link"
        className="site-nav__contact"
        render={<NavLink to="/contact" />}
      >
        Let's connect <ArrowUpRight size={16} />
      </Button>
    </header>
  );
};

export default Navbar;
