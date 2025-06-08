import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-6 py-10">
      {/* Project Card 1 */}
      {/* <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-600 pb-5 rounded-2xl shadow-lg w-[450px]">
        <div className="card bg-base-100 w-full shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="FinSight"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-softindigo py-1.5 text-2xl">
              FinSight
            </h2>
            <p className="text-tealgreen text-xl">
              A smart personal finance tracker with analytics and goals.
            </p>
            <div className="card-actions mt-4 flex justify-around">
              <button className="flex items-center gap-1 border-1 hover:scale-110 duration-300 px-2 rounded-md">
                Details <IoChevronForward />{" "}
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Project Card 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-600 pb-6 pt-4 rounded-2xl shadow-lg w-[450px] mx-auto">
        <div className="bg-base-100 w-full shadow-sm rounded-2xl overflow-hidden">
          <figure className="px-8 pt-6">
            <img
              src="/portfolio.png"
              alt="My Portfolio"
              className="rounded-xl hover:scale-105 transition-transform duration-300"
            />
          </figure>
          <div className="card-body items-center text-center px-6">
            <h2 className="text-softindigo py-3 text-2xl font-semibold">
              MyPortfolio
            </h2>
            <p className="text-tealgreen text-lg leading-relaxed">
              Personal portfolio showcasing skills, projects, and certificates.
            </p>
            <div className="card-actions mt-6">
              <Link
                to="/myportfolio"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-slate-700 text-white rounded-md hover:bg-slate-600 transition-all duration-300"
              >
                Details <IoChevronForward className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Project Card 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-600 pb-5 rounded-2xl shadow-lg w-[450px]">
        <div className="card bg-base-100 w-full shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="exp.webp"
              alt="Project 3"
              className="rounded-xl hover:scale-105 transition-transform duration-300"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-softindigo text-2xl py-3">
              Expense Tracker
            </h2>
            <p className="text-tealgreen text-xl px-2">
              Expense tracker app to monitor daily spending, set budgets, and
              visualize finances.
            </p>
            <div className="card-actions mt-4">
              <Link
                to="/expense"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-slate-700 text-white rounded-md hover:bg-slate-600 transition-all duration-300"
              >
                Details <IoChevronForward className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
