import { AiOutlineSend } from "react-icons/ai";

const PortfolioProjects = () => {
  return (
    <div className="max-w-[60%] mx-auto py-48" id="projects">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl">StaffSphere</h3>
          <p className="py-4 text-xl">
            Staffsphere is a web application for employee management,
            streamlining tasks like workload monitoring, salary payments, and
            contract management, allowing HR executives to oversee and manage
            employee data.
          </p>

          <h3 className="font-bold text-2xl mb-2">Core Features</h3>

          <ul className="space-y-4 text-lg">
            <li>
              <b>Role Management:</b> Users are assigned roles (Employee, HR,
              Admin) during registration, with the Admin role managed from the
              backend.
            </li>
            <li>
              <b>Workflow Updates:</b> Employees can submit work records,
              including tasks, hours worked, and dates, which are stored in the
              database and displayed in a table format.
            </li>
            <li>
              <b>Payment History:</b> Employees can view their monthly salary
              payment history, with the option for HR to process payments and
              ensure no duplicate payments are made.
            </li>
          </ul>

          <h3 className="text-xl my-4">
            <b>Used Technologies: </b>Firebase, Mongodb, Reactjs, Expressjs
            Stripe-payment, Tailwindcss
          </h3>

          <h3 className="text-xl my-4">
            <b>Live Link:</b>{" "}
            <a href="https://staffsphere-4fb6f.web.app/">
              https://staffsphere-4fb6f.web.app/
            </a>
          </h3>

          <h3 className="text-xl my-4">
            <b>Client Repo:</b>{" "}
            <a href="https://github.com/tahmid-ahnaf/staffsphere-client">
              https://github.com/tahmid-ahnaf/staffsphere-client
            </a>
          </h3>

          <h3 className="text-xl my-4">
            <b>Server Repo:</b>{" "}
            <a href="https://github.com/tahmid-ahnaf/staffsphere-server">
              https://github.com/tahmid-ahnaf/staffsphere-server
            </a>
          </h3>
        </div>
      </dialog>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl">SwapItRight</h3>
          <p className="py-4 text-xl">
            SwapItRight offers an interactive platform for users to view and
            update alternative recommendations for products, utilizing JWT token
            authentication for secure and personalized user experience, ensuring
            a community-driven approach to product alternatives.
          </p>

          <h3 className="font-bold text-2xl mb-2">Core Features</h3>

          <ul className="space-y-4 text-lg">
            <li>
              <b>Community-Driven Recommendations:</b> Users can ask for and
              suggest alternatives to products, fostering a resourceful
              community environment.
            </li>
            <li>
              <b>User Interaction Control:</b> Users possess complete control
              over their content with abilities to post, view, update, and
              delete both queries and recommendations.
            </li>
            <li>
              <b>Secure Authentication:</b> Utilizes JWT tokens to manage
              sessions and secure user data, enhancing the overall security of
              the platform.
            </li>
          </ul>

          <h3 className="text-xl my-4">
            <b>Used Technologies: </b>Nodejs, Firebase, Mongodb, Reactjs,
            Expressjs Jwt-authentication, Tailwindcss
          </h3>

          <h3 className="text-xl my-4">
            <b>Live Link:</b>{" "}
            <a href="https://swapitright-5c4cc.web.app/">
              https://swapitright-5c4cc.web.app/
            </a>
          </h3>

          <h3 className="text-xl my-4">
            <b>Client Repo:</b>{" "}
            <a href="https://github.com/tahmid-ahnaf/swapitright-client">
              https://github.com/tahmid-ahnaf/swapitright-client
            </a>
          </h3>

          <h3 className="text-xl my-4">
            <b>Server Repo:</b>{" "}
            <a href="https://github.com/tahmid-ahnaf/swapitright-server">
              https://github.com/tahmid-ahnaf/swapitright-server
            </a>
          </h3>
        </div>
      </dialog>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl">Artisan Alley</h3>
          <p className="py-4 text-xl">
            Artisan Alley is an online platform that celebrates painting
            collections, providing a curated space for artists and enthusiasts
            to showcase and explore diverse artworks.
          </p>

          <h3 className="font-bold text-2xl mb-2">Core Features</h3>

          <ul className="space-y-4 text-lg">
            <li>
              <b>Painting Management:</b> Registered users have the ability to
              add new paintings to the collection, update painting details such
              as image, item name, subcategory name, short description, price,
              and rating.
            </li>
            <li>
              <b>Subcategory Filtering:</b> Users can browse and view all
              paintings within a particular subcategory, allowing for
              streamlined exploration based on personal interests.
            </li>
            <li>
              <b>Comprehensive Painting Information:</b> A table view provides
              users with an overview of all paintings in the collection,
              displaying relevant details for easy reference.
            </li>
          </ul>

          <h3 className="text-xl my-4">
            <b>Used Technologies: </b>Firebase, Mongodb, Reactjs, Expressjs, Tailwindcss,
            Swiper-slider, React-typewriter
          </h3>

          <h3 className="text-xl my-4">
            <b>Live Link:</b>{" "}
            <a href="https://artisan-alley-c584a.web.app/">
              https://artisan-alley-c584a.web.app/
            </a>
          </h3>

          <h3 className="text-xl my-4">
            <b>Client Repo:</b>{" "}
            <a href="https://github.com/tahmid-ahnaf/artisanalley-client">
              https://github.com/tahmid-ahnaf/artisanalley-client
            </a>
          </h3>

          <h3 className="text-xl my-4">
            <b>Server Repo:</b>{" "}
            <a href="https://github.com/tahmid-ahnaf/artisanalley-server">
              https://github.com/tahmid-ahnaf/artisanalley-server
            </a>
          </h3>
        </div>
      </dialog>
      <h2 className="text-4xl text-center">Projects</h2>
      <p className="text-2xl text-center">Most Recent Works</p>

      <div className="grid grid-cols-2 gap-12 justify-center mt-12">
        <div className="card shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/zVFQ6QF/staffsphere.png   "
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">StaffSphere</h2>
            <p className="text-xl">An Employee Management System</p>
            <div className="card-actions">
              <button
                className="btn  btn-neutral"
                type="submit"
                value="Send"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Details <AiOutlineSend />
              </button>
            </div>
          </div>
        </div>

        <div className="card shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/gJ8t8dV/swapitright.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">SwapItRight</h2>
            <p className="text-xl">
              Alternative Product Recommendation Platform
            </p>
            <div className="card-actions">
              <button
                className="btn  btn-neutral"
                type="submit"
                value="Send"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Details <AiOutlineSend />
              </button>
            </div>
          </div>
        </div>

        <div className="card shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/cCBWTXF/artisanalley.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Artisan Alley</h2>
            <p className="text-xl">Painting Collection Platform</p>
            <div className="card-actions">
              <button
                className="btn  btn-neutral"
                type="submit"
                value="Send"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Details <AiOutlineSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
