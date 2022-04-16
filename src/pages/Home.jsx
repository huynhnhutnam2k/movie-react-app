import React from "react";
import { Link } from "react-router-dom";
import { OutlineButton } from "../components/Button";
import MovieList from "../components/MovieList";
import SliderHero from "../components/SliderHero";
import { movieType, category, tvType } from "../api/tmdbApi";
function Home() {
  return (
    <>
      <SliderHero />
      <div className="px-4 py-10 bg-black">
        <div className="mb-8 px-4">
          <div className="flex items-center justify-between text-white">
            <h2 className="text-[25px] font-bold">Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton text="View more" />
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
        <div className="mb-8 px-4">
          <div className="flex items-center justify-between text-white">
            <h2 className="text-[25px] font-bold">Top rated movies</h2>
            <Link to="/movie">
              <OutlineButton text="View more" />
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        <div className="mb-8 px-4">
          <div className="flex items-center justify-between text-white">
            <h2 className="text-[25px] font-bold">Trending TV</h2>
            <Link to="/tv">
              <OutlineButton text="View more" />
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
        <div className="mb-8 px-4">
          <div className="flex items-center justify-between text-white">
            <h2 className="text-[25px] font-bold">Top rated TV</h2>
            <Link to="/tv">
              <OutlineButton text="View more" />
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
}

export default Home;
