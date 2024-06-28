import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="bg-[#F3F7EC] ">
    <div className="navbar lg:max-w-[85%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/update-profile"}>Update Profile</NavLink>
            </li>

            <li>
              <NavLink to={"/agents"}>Agents</NavLink>
            </li>
          
          </ul>
        </div>
        <NavLink className="font-bold lg:text-4xl text-3xl" to={"/"}>Ahnaf Tahmid</NavLink>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-2xl">
        <li>
              <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
              <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
              <NavLink to={"/skills"}>Skills</NavLink>
        </li>
        <li>
              <NavLink to={"/services"}>Services</NavLink>
        </li>
        <li>
              <NavLink to={"/projects"}>Projects</NavLink>
        </li>
        <li>
              <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        </ul>
      </div>
    </div>
    </div>
    
  );
};

export default Navbar;
