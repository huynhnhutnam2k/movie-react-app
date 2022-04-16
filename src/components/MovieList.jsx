import axios from "axios";
import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import tmdbApi, { movieType, tvType, category } from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";
function MovieList(props) {
  const [items, setItems] = useState([]);
  //   https://api.themoviedb.org/3/movie/top_rated?api_key=9b387cd43c01be13be603f954cb4b2b2&language=en-US&page=1
  //   console.log(props.id);
  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            await axios
              .get(
                apiConfig.baseUrl +
                  "movie/" +
                  movieType[props.type] +
                  "?api_key=" +
                  apiConfig.apiKey +
                  "&language=en-US&page=1"
              )
              .then((res) => setItems(res.data.results))
              .catch((err) => console.log("err"));
            break;

          default:
            await axios
              .get(
                apiConfig.baseUrl +
                  "tv/" +
                  tvType[props.type] +
                  "?api_key=" +
                  apiConfig.apiKey +
                  "&language=en-US&page=1"
              )
              .then((res) => setItems(res.data.results))
              .catch((err) => console.log(err));
            break;
        }
        //   setItems(response.data.results);
        //   console.log(response.data.results);
      } else {
        await axios
          .get(
            apiConfig.baseUrl +
              "movie/" +
              props.id +
              "/similar?api_key=" +
              apiConfig.apiKey +
              "&language=en-US&page=1"
          )
          .then((res) => setItems(res.data.results))
          .catch((err) => console.log(err));
      }
    };
    getList();
    return () => {};
  }, []);
  // console.log(items);
  return (
    <>
      <div className="movie-list">
        <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <MovieCard item={item} category={props.category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default MovieList;
