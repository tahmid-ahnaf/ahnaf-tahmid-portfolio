import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
const PortfolioSkills = () => {
  return (
    <div className="max-w-[85%] mx-auto py-36" id="skills">

    <h2 className="text-4xl text-center mb-2 font-bold">Skills</h2>
    <p className="text-3xl text-center mb-20">My Technical Level</p>
      <div className="grid grid-cols-2 gap-8">
        <div className="card shadow-xl">
          <h2 className="text-3xl text-center p-2">My Expertise</h2>

          <div className="grid grid-cols-3 gap-12 items-center mx-auto card-body">
            <div className="flex items-center gap-2">
            <IoCheckmarkDoneCircleSharp className="text-3xl"></IoCheckmarkDoneCircleSharp>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">ReactJS</p>
                <p className="font-medium text-2xl">Advanced</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <IoCheckmarkDoneCircleSharp className="text-3xl"></IoCheckmarkDoneCircleSharp>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">ExpressJS</p>
                <p className="font-medium text-2xl">Advanced</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <IoCheckmarkDoneCircleSharp className="text-3xl"></IoCheckmarkDoneCircleSharp>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">MongoDB</p>
                <p className="font-medium text-2xl">Advanced</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <IoCheckmarkDoneCircleSharp className="text-3xl"></IoCheckmarkDoneCircleSharp>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">ES6 JS</p>
                <p className="font-medium text-2xl">Advanced</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <IoCheckmarkDoneCircleSharp className="text-3xl"></IoCheckmarkDoneCircleSharp>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">TailwindCSS</p>
                <p className="font-medium text-2xl">Advanced</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <IoCheckmarkDoneCircleSharp className="text-3xl"></IoCheckmarkDoneCircleSharp>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">HTML5</p>
                <p className="font-medium text-2xl">Advanced</p>
              </div>
            </div>

            
          </div>
        </div>

        <div className="card shadow-xl">
          <h2 className="text-3xl text-center p-2">Familiar With</h2>

          <div className="grid grid-cols-2 items-center justify-items-center card-body">
          <div className="flex items-center gap-2">
            <IoCheckmarkDoneCircleSharp className="text-3xl"></IoCheckmarkDoneCircleSharp>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">NodeJS</p>
                <p className="font-medium text-2xl">Intermediate</p>
              </div>
        </div>
          <div className="flex items-center gap-2">
            <IoCheckmarkDoneCircleSharp className="text-3xl"></IoCheckmarkDoneCircleSharp>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">Spring Boot</p>
                <p className="font-medium text-2xl">Beginner</p>
              </div>
        </div>
          </div>
        </div>


        <div className="card shadow-xl">
          <h2 className="text-3xl text-center p-2">Tools</h2>

          <div className="grid grid-cols-3 items-center justify-items-center card-body">
          <div className="flex items-center gap-2">
            <IoCheckmarkDoneCircleSharp className="text-3xl"></IoCheckmarkDoneCircleSharp>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">Git / Github</p>
                <p className="font-medium text-2xl">Advanced</p>
              </div>
        </div>
          <div className="flex items-center gap-2">
            <IoCheckmarkDoneCircleSharp className="text-3xl"></IoCheckmarkDoneCircleSharp>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">Firebase</p>
                <p className="font-medium text-2xl">Advanced</p>
              </div>
        </div>

        <div className="flex items-center gap-2">
            <IoCheckmarkDoneCircleSharp className="text-3xl"></IoCheckmarkDoneCircleSharp>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">Vercel</p>
                <p className="font-medium text-2xl">Advanced</p>
              </div>
        </div>
          </div>
        </div>


        <div className="card shadow-xl">
          <h2 className="text-3xl text-center p-2">Soft Skills</h2>

          <div className="grid grid-cols-2 gap-12 items-center card-body">
          <div className="flex items-center gap-2">
            <IoCheckmarkDoneCircleSharp className="text-3xl"></IoCheckmarkDoneCircleSharp>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">Collaborative Development</p>
                <p className="font-medium text-2xl">Advanced</p>
              </div>
        </div>
          <div className="flex items-center gap-2">
            <IoCheckmarkDoneCircleSharp className="text-3xl"></IoCheckmarkDoneCircleSharp>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">Self Motivated Learning</p>
                <p className="font-medium text-2xl">Advanced</p>
              </div>
        </div>

        <div className="flex items-center gap-2">
            <IoCheckmarkDoneCircleSharp className="text-3xl"></IoCheckmarkDoneCircleSharp>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">Adaptability to New Tools</p>
                <p className="font-medium text-2xl">Advanced</p>
              </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSkills;
