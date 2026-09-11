import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <NavLink
        to="/"
        className="flex items-center justify-center w-15 shadow-md font-black"
      >
        <p>DaoNQ</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black-500"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
