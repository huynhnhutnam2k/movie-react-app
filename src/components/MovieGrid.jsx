import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import apiConfig from "../api/apiConfig";
import Input from "./Input";
import MovieCard from "./MovieCard";
import { category as cate, movieType, tvType } from "../api/tmdbApi";
function MovieGrid(props) {
  const { category } = props;
  const [items, setItems] = useState([]);
  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        switch (category) {
          case cate.movie:
            await axios
              .get(
                apiConfig.baseUrl +
                  "movie/" +
                  movieType.upcoming +
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
                  tvType.popular +
                  "?api_key=" +
                  apiConfig.apiKey +
                  "&language=en-US&page=1"
              )
              .then((res) => setItems(res.data.results))
              .catch((err) => console.log(err));
            break;
        }
      } else {
        const query = keyword;
        await axios
          .get(
            apiConfig.baseUrl +
              "search/" +
              cate[category] +
              "?api_key=" +
              apiConfig.apiKey +
              `&query='${query}'`
          )
          .then((res) => setItems(res.data.results))
          .catch((err) => console.log("err"));
      }
    };
    getList();
  }, [category, keyword]);

  console.log(keyword);
  return (
    <>
      {/* <Outlet /> */}
      <div className="">
        <MovieSearch category={category} keyword={keyword} />
      </div>
      <div className="grid grid-cols-layout mt-5 gap-[20px] mb-[3rem]">
        {items.map((item, i) => (
          <MovieCard category={category} item={item} key={i} />
        ))}
      </div>
    </>
  );
}
const MovieSearch = (props) => {
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");
  let redirect = useNavigate();
  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      redirect(`/${cate[props.category]}/search/${keyword}`, {
        state: keyword,
      });
    }
  }, [keyword, props.category, redirect]);
  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
    <>
      <div className="relative w-full max-w-[500px]">
        <Input
          type="text"
          placeholder="Enter your keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div
          className="absolute top-0 right-0 px-[1.5rem] h-full text-white bg-main rounded-full cursor-pointer flex justify-center items-center"
          onClick={goToSearch}
        >
          Search
        </div>
      </div>
    </>
  );
};
export default MovieGrid;
