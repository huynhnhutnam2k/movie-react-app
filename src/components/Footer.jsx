import React from "react";
import { Link } from "react-router-dom";
import bg from "../asset/footer-bg.jpg";
function Footer() {
  return (
    <>
      <div
        className="w-full relative py-[60px] px-[2rem] bg-top bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-[1000px] mx-auto">
          <Link
            to="/"
            className="text-white text-center text-[50px] block hover:text-main duration-100"
          >
            tMovies
          </Link>
          <div className="grid grid-cols-3 mt-4">
            <div className="flex gap-y-5 flex-col text-white text-[25px] duration-200">
              <Link to="/" className="hover:text-main">
                Home
              </Link>
              <Link to="/" className="hover:text-main">
                Contact us
              </Link>
              <Link to="/" className="hover:text-main">
                Term of services
              </Link>
              <Link to="/" className="hover:text-main">
                About us
              </Link>
            </div>
            <div className="flex gap-y-5 flex-col text-white text-[25px] duration-200">
              <Link to="/" className="hover:text-main">
                Live
              </Link>
              <Link to="/" className="hover:text-main">
                FAQ
              </Link>
              <Link to="/" className="hover:text-main">
                Premium
              </Link>
              <Link to="/" className="hover:text-main">
                Pravacy policy
              </Link>
            </div>
            <div className="flex gap-y-5 flex-col text-white text-[25px] duration-200">
              <Link to="/" className="hover:text-main">
                You must watch
              </Link>
              <Link to="/" className="hover:text-main">
                Recent release
              </Link>
              <Link to="/" className="hover:text-main">
                Top IMDB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
