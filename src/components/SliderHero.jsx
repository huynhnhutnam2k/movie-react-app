import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "./Button";
import { Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import Modal, { ModalContent } from "./Modal";
import apiConfig from "../api/apiConfig";
import { category } from "../api/tmdbApi";
function SliderHero() {
  SwiperCore.use([Autoplay]);
  const [movies, setMovies] = useState([]);
  const URL_API =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=9b387cd43c01be13be603f954cb4b2b2";
  useEffect(() => {
    axios
      .get(URL_API)
      .then((res) => {
        if (res.data) {
          const data = res.data.results.slice(5, 10);
          //   console.log(data);
          setMovies(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  //   console.log(movies);
  return (
    <>
      <div className="hero-slider">
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
          // autoplay={{ delay: 3000 }}
        >
          {movies.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <SliderItem
                  item={item}
                  className={`${isActive ? "active" : ""}`}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        {movies.map((item, i) => (
          <TrailerModal item={item} key={i} />
        ))}
      </div>
    </>
  );
}
const SliderItem = (props) => {
  // const history = unstable_HistoryRouter();
  // const navigate = useNavigate();
  const item = props.item;
  const background = item.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}`
    : `https://image.tmdb.org/t/p/original/${item.poster_path}`;
  // console.log(background);

  const poster = item.poster_path
    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
    : "";
  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);

    const video = await axios.get(
      apiConfig.baseUrl +
        category.movie +
        "/" +
        item.id +
        "/videos?api_key=" +
        apiConfig.apiKey +
        "&language=en-US"
    );
    const videos = video.data;
    // console.log(videos.results[0].key);
    if (videos.results.length > 0) {
      const videoUrl = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector(".modal-content > iframe")
        .setAttribute("src", videoUrl);
    } else {
      modal.querySelector(".modal-content").innerHTML = "No trailer";
    }
    modal.classList.toggle("active");
  };

  return (
    <>
      <div
        className={`w-full py-20 relative bg-center bg-cover bg-no-repeat before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-bw hero-item ${props.className}`}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="relative flex justify-center items-center hero-item-content">
          <div className="w-[55%] px-8 relative text-white hero-item-info">
            <div className="text-[50px] font-bold leading-none mb-10 max-w-[600px] text-left title">
              {item.title}
            </div>
            <div className="font-bold text-left font-[30px] overview">
              {item.overview}
            </div>
            <div className="btns flex gap-x-4 mt-4">
              <Link
                to={`movie/${item.id}`}
                className="w-[250px] py-2 flex items-center justify-center bg-main rounded-[30px] text-[30px] font-bold"
              >
                Watch now
              </Link>
              <div
                className="w-[250px] py-2 flex items-center justify-center bg-transparent rounded-[30px] border-2 border-white font-bold text-[30px] hover:bg-white hover:text-main duration-200 cursor-pointer"
                onClick={setModalActive}
              >
                Watch trailer
              </div>
            </div>
          </div>
          <div className="hero-item-poster">
            <img src={poster} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

const TrailerModal = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);
  const onClose = () => iframeRef.current.setAttribute("src", "");
  return (
    <>
      <Modal active={false} id={`modal_${item.id}`}>
        <ModalContent onClose={onClose}>
          <iframe
            ref={iframeRef}
            width="100%"
            height="500px"
            title="trailer"
          ></iframe>
        </ModalContent>
      </Modal>
    </>
  );
};
export default SliderHero;
