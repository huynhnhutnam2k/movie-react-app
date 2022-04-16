import React from "react";
import { Link } from "react-router-dom";
import apiConfig from "../api/apiConfig";
import { category } from "../api/tmdbApi";
import Button from "./Button";

function MovieCard(props) {
  const link = "/" + category[props.category] + "/" + props.item.id;
  const bg = props.item.poster_path
    ? `https://image.tmdb.org/t/p/w500${props.item.poster_path}`
    : `https://image.tmdb.org/t/p/w500${props.item.backdrop_path}`;
  //   console.log(props.category);
  return (
    <>
      <Link to={link}>
        <div
          className="relative bg-top bg-no-repeat rounded-[20px] bg-cover pt-[160%] item"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="w-[70px] h-[50px] absolute left-2/4 flex items-center justify-center rounded-[20px] bg-main top-2/4 -translate-x-2/4 -translate-y-2/4 text-white text-[30px] button scale-0">
            <ion-icon name="play-circle-outline"></ion-icon>
          </div>
        </div>
        <h3 className="text-[20px] text-white hover:text-main duration-200 font-bold">
          {props.item.title || props.item.name}
        </h3>
      </Link>
    </>
  );
}

export default MovieCard;
