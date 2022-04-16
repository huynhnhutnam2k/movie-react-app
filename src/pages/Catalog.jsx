import React from "react";
import { Outlet, useParams } from "react-router";
import bg from "../asset/footer-bg.jpg";
import MovieGrid from "../components/MovieGrid";
function Catalog() {
  const { category } = useParams();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center catalog"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h2 className="text-white text-[25px] font-bold">
          {category === "movie" ? "Movies" : "TV Series"}
        </h2>
      </div>
      <div className="max-w-full">
        <div className="px-[2rem] mb-[3rem]">
          <MovieGrid category={category} />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Catalog;
