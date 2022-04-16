import React, { useEffect, useRef } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
function Header() {
  const headerNav = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Movies",
      path: "/movie",
    },
    {
      display: "TV Series",
      path: "/tv",
    },
  ];
  const { pathname } = useLocation();
  const active = headerNav.findIndex((e) => e.path === pathname);
  // console.log(pathname);
  // console.log(active);
  const headerRef = useRef(null);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.documentElement.scrollTop > 1 ||
        document.body.scrollTop > 1
      ) {
        headerRef.current.classList.add("shrinked");
      } else {
        headerRef.current.classList.remove("shrinked");
      }
    };
    document.addEventListener("scroll", shrinkHeader);
    return () => {
      document.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  return (
    <>
      <div
        ref={headerRef}
        className="w-full h-[80px] transition-all fixed top-0 left-0 z-50"
      >
        <div className="w-[1400px] mx-auto h-full text-white flex justify-between items-center">
          <Link to="/" className="text-[30px] font-bold">
            tMovies
          </Link>
          <div className="flex gap-x-5 text-[20px] ">
            {headerNav.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className={`header relative font-bold after:absolute after:bottom-0 after:left-2/4 after:-translate-x-2/4 after:w-0 after:transition-all after:duration-500  after:h-1 after:bg-red-500 hover:after:w-full  hover:text-red-500 ${
                  index === active ? "after:w-full " : ""
                }`}
              >
                {item.display}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
