import { Link } from "react-scroll";

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
                <Link to="/" spy={true}
                smooth={true}
                duration={500}
                offset={50}>Home</Link>
              </li>
              <li>
                <Link to="about" spy={true}
                smooth={true}
                duration={500}
                offset={-50}>About</Link>
              </li>
              <li>
                <Link to="skills" spy={true}
                smooth={true}
                duration={500}
                offset={50}>Skills</Link>
              </li>
              <li>
                <Link to="qualification" spy={true}
                smooth={true}
                duration={500}
                offset={50}>Qualification</Link>
              </li>
              <li>
                <Link to="projects" spy={true}
                smooth={true}
                duration={500}
                offset={50}>Projects</Link>
              </li>
              <li>
                <Link to="contact" spy={true}
                smooth={true}
                duration={500}
                offset={50}>Contact</Link>
              </li>
            </ul>
          </div>
          <Link className="font-bold lg:text-4xl text-3xl" to={"/"}>
            Ahnaf Tahmid
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-2xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                offset={50}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="qualification"
                spy={true}
                smooth={true}
                duration={500}
                offset={50}
              >
                Qualification
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={50}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={50}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
