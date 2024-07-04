import { MdWavingHand } from "react-icons/md";
import { TiLocationArrowOutline } from "react-icons/ti";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";


const PortfolioBanner = () => {
    return (
        <div className="py-48 " id="banner">
            <div className="max-w-[85%] mx-auto">
  <div className="flex lg:flex-row-reverse items-center justify-between">

  <div className="rounded-full">
  <img
      src="https://i.ibb.co/7Ym3kBz/image.png"
      className="mx-auto rounded-full h-96 w-96" />
  </div>
    

      
    <div className="flex items-center gap-20">
    <div className="flex flex-col gap-8 text-2xl">
      <FiGithub></FiGithub>
      <FiLinkedin></FiLinkedin>
      <FiFacebook></FiFacebook>
      </div>
    <div className="flex flex-col gap-8">
    <h1 className="text-5xl font-bold flex gap-4">Ahnaf Tahmid <MdWavingHand className="text-yellow-500" /> </h1>
      <p className="text-3xl">Web Developer</p>
      <p className="text-2xl">
        I am creative web developer based in Bangladesh and I am <br/>very passionate about my work.
      </p>
      <div>
      <button className="btn btn-lg btn-neutral">Say Hello <TiLocationArrowOutline /></button>
    </div>
      
      </div>
      
    </div>

    
  </div>
</div>
        </div>
    );
};

export default PortfolioBanner;