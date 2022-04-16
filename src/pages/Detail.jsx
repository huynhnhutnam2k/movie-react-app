import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiConfig from "../api/apiConfig";
import { category as cate } from "../api/tmdbApi";
import CartList from "../components/CartList";
import VideoList from "../components/VideoList";
import MovieList from "../components/MovieList";
function Detail() {
  const { category, id } = useParams();
  const [items, setItems] = useState(null);
  // console.log(cate[category]);
  useEffect(() => {
    const getDetail = async () => {
      axios
        .get(
          apiConfig.baseUrl +
            "/" +
            cate[category] +
            "/" +
            id +
            "?api_key=" +
            apiConfig.apiKey +
            "&language=en-US"
        )
        .then((res) => {
          setItems(res.data);
          // console.log(res.data);
        })
        .catch((err) => console.log("err"));
    };
    getDetail();
  }, [category, id]);

  const bg =
    items && items.backdrop_path
      ? `https://image.tmdb.org/t/p/original/${items.backdrop_path}`
      : "";
  const posterBg =
    items && items.poster_path
      ? `https://image.tmdb.org/t/p/original/${items.poster_path}`
      : "";
  // console.log(bg, posterBg);
  return (
    <>
      {items && (
        <>
          <div
            className="banner"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
          <div className="movie-content mb-8 max-w-[1260px] mx-auto px-8">
            <div className="movie-content_poster">
              <div
                className="movie-content_poster_image"
                style={{ backgroundImage: `url(${posterBg})` }}
              ></div>
            </div>
            <div className="movie-content_info">
              <h1 className="text-[4rem] font-bold leading">
                {items.title || items.name}
              </h1>
              <div className="genres">
                {items.genres &&
                  items.genres.slice(0, 5).map((item, i) => (
                    <span key={i} className="genres-item">
                      {item.name}
                    </span>
                  ))}
              </div>
              <div className="text-[16px] font-normal mt-[2rem]">
                {items.overview}
              </div>
              <div className="casts flex flex-col">
                <div className="flex items-center justify-between">
                  <h2 className="text-[25px] font-bold">Casts</h2>
                </div>
                <CartList id={items.id} />
              </div>
            </div>
          </div>
          <div className="max-w-full">
            <div className="px-[2rem] mb-[3rem]">
              <VideoList id={items.id} />
            </div>
            <div className="px-[2rem] mb-[3rem]">
              <div className="flex items-center justify-between">
                <h2 className="text-[25px] text-white font-bold">Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={items.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
