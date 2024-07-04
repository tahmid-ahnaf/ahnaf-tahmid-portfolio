import { PiCertificate } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
const PortfolioAbout = () => {
    
  return (
    <div className="max-w-[85%] mx-auto " id="about">
      <h2 className="text-4xl text-center mb-2 font-bold">About Me</h2>
      <p className="text-3xl text-center mb-20">My Introduction</p>

      <div className="grid grid-cols-2 ">
        <div className=" self-center">
        <img
      src="https://i.ibb.co/7Ym3kBz/image.png"
      className="mx-auto rounded-3xl h-96 w-96" />
        </div>

        <div className="flex flex-col gap-12 ">
          <div className="grid grid-cols-3 gap-4">
            <div className="card shadow-xl">
              <figure className="px-10 pt-10 text-4xl">
                <PiCertificate></PiCertificate>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-3xl">Completed</h2>
                <p className="text-xl">15+ Projects</p>
              </div>
            </div>
            <div className="card shadow-xl">
              <figure className="px-10 pt-10 text-4xl">
              <MdOutlineIncompleteCircle></MdOutlineIncompleteCircle>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-3xl">Support</h2>
                <p className="text-xl">Online 24/7</p>
              </div>
            </div>
            <div className="card shadow-xl">
              <figure className="px-10 pt-10 text-4xl">
              <BiSupport></BiSupport>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-3xl">Experience</h2>
                <p className="text-xl">Fresher</p>
              </div>
            </div>
          </div>

          <p className="text-3xl">
            Web Developer, I create web applications with responsive UI. I have
            created several full stack projects.
          </p>

          <div><button className="btn btn-lg btn-neutral"><a href="https://drive.google.com/uc?export=download&id=1mf63H4-jmpyWtGDSgm5OAV8XWE5qFkIc">Download My CV</a> <FaRegFileAlt /> </button></div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAbout;
