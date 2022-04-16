import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import apiConfig from "../api/apiConfig";

function VideoList(props) {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      axios
        .get(
          apiConfig.baseUrl +
            category +
            "/" +
            props.id +
            "/videos?api_key=" +
            apiConfig.apiKey +
            "&language=en-US"
        )
        .then((res) => {
          const data = res.data;
          const newArr = data.results.slice(0, 5);
          setVideos(newArr);
          // if (data.results.length > 0) {
          //   data.results.map((item, i) => {
          //     console.log(`https://www.youtube.com/embed/${item.key}`);
          //   });
          // }
        })
        .catch((err) => console.log("err"));
    };
    getMovie();
  }, [category, props.id]);
  return (
    <>
      {videos.map((item, i) => (
        <Video key={i} item={item} />
      ))}
    </>
  );
}
const Video = (props) => {
  const iframeRef = useRef(null);
  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.style.height = height;
  });
  return (
    <>
      <div className="mb-[3rem] text-white text-[30px] font-bold">
        <div className="mb-[1.5rem]">
          <h2 className="">{props.item.name}</h2>
        </div>
        <iframe
          width="100%"
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${props.item.key}`}
        ></iframe>
      </div>
    </>
  );
};
export default VideoList;
