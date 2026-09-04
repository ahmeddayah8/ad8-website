import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-16 fixed left-0 right-0 bg-white/70 backdrop-blur-md shadow z-10 text-gray-700 text-2xl">
      <header className="flex justify-around p-4">
        {/* desktop menu */}

        <h1 className=" mr-25 text-4xl font-bold text-orange-500">AD8</h1>
        <nav className="hidden  md:flex justify-center gap-6 ">
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-500 font-bold " : undefined)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-500 font-bold " : undefined)}
            to="/properties"
          >
            Properties
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-500 font-bold " : undefined)}
            to="/agents"
          >
            Agents
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-500 font-bold " : undefined)}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-500 font-bold " : undefined)}
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>

        {/* hamburger button */}
        <button onClick={() => setIsOpen(!isOpen)} className="ml-25 md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE MENU */}
        {isOpen && (
          <nav className="absolute left-0 right-0 top-full z-50 flex w-full flex-col gap-6 py-10 px-4 rounded-2xl bg-orange-500 p-6 text-white shadow-lg md:hidden">
            <NavLink
              onClick={() => setIsOpen(false)}
              className={"font-bold "}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              className={"font-bold "}
              to="/properties"
            >
              Properties
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              className={"font-bold "}
              to="/agents"
            >
              Agents
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              className={"font-bold "}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              className={"font-bold "}
              to="/contact"
            >
              Contact
            </NavLink>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Nav;
