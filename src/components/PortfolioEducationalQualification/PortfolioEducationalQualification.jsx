import React from "react";

const PortfolioEducationalQualification = () => {
  return (
    <div className="max-w-[85%] mx-auto py-24 " id="qualification">
      <h2 className="text-4xl text-center mb-2 font-bold">Qualification</h2>
      <p className="text-3xl text-center mb-20">My Educational Qualification</p>

      <div className="mt-12">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic text-3xl">2017</time>
      <div className="text-2xl font-black">Secondary School Certificate</div>
      <span className="text-3xl">Cumilla Zilla School</span> 
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic text-3xl">2019</time>
      <div className="font-black text-2xl">Higher Secondary Certificate</div>
      <span className="text-3xl">Saint Joseph Higher Secondary School, Dhaka</span>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic text-3xl"> January 2020- Present</time>
      <div className="text-2xl font-black">Bachelor of Science in Computer Science & Engineering</div>
      <span className="text-3xl">University of Dhaka</span>
    </div>
    <hr />
  </li>
</ul>
      </div>

      
    </div>
  );
};

export default PortfolioEducationalQualification;
