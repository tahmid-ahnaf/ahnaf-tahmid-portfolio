import { FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const PortfolioContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_r24xa38", "template_vco1cfl", form.current, {
        publicKey: "nGERyN2pSMTV5_vRI",
      })
      .then(
        () => {
          Swal.fire({
            title: "Email Sent!",
            text: "Hopefully we will connect soon!",
            icon: "success",
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.text,
          });
        }
      );
  };
  return (
    <div className="max-w-[85%] mx-auto py-48 " id="contact">
      <h2 className="text-4xl text-center">Contact Me</h2>
      <p className="text-2xl text-center">Get in touch</p>

      <div className="grid grid-cols-2 gap-8 justify-center">
        <div className="flex flex-col gap-8 ">
          <div className="card shadow-xl">
            <figure className="px-10 pt-10 text-4xl">
              <MdOutlineMail />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-3xl font-semibold">Email</h2>
              <p className="text-xl text-gray-600">
              <a href="mailto:atahmid928@gmail.com">atahmid928@gmail.com</a></p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10 text-4xl">
              <FiLinkedin />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-3xl font-semibold">LinkedIn</h2>
              <p className="text-xl text-gray-600">
              <a className="outline-none" href="https://www.linkedin.com/in/ahnaftahmidhere">https://www.linkedin.com/in/ahnaftahmidhere</a>
                
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10 text-4xl">
              <FiGithub />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-3xl font-semibold">Github</h2>
              <p className="text-xl text-gray-600">
              <a href="https://github.com/tahmid-ahnaf">https://github.com/tahmid-ahnaf</a>
                
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <form className="card-body" ref={form} onSubmit={sendEmail}>
            <label className="label text-2xl">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="input input-bordered bg-[#F3F7EC] mb-8"

            />
            <label className="label text-2xl">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="input input-bordered bg-[#F3F7EC] mb-8"
            />
            <label className="label text-2xl">Message</label>
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered textarea-md w-full bg-[#F3F7EC] mb-8"
              name="message"
            ></textarea>
            <div className="mx-auto">
              <button
                className="btn btn-lg btn-neutral"
                type="submit"
                value="Send"
              >
                Send Message <FiSend />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContact;
