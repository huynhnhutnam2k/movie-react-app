import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import apiConfig from "../api/apiConfig";

function CartList(props) {
  const { category } = useParams();
  //   console.log(category);
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getCast = async () => {
      axios
        .get(
          apiConfig.baseUrl +
            category +
            "/" +
            props.id +
            "/credits?api_key=" +
            apiConfig.apiKey
        )
        .then((res) => setCasts(res.data.cast.slice(0, 5)))
        .catch((err) => console.log(err));
    };
    getCast();
  }, [category, props.id]);
  //   console.log(casts);

  return (
    <>
      <div className="casts">
        {casts.map((item, i) => (
          <div key={i} className="casts-item">
            <div
              className="casts-item_image"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.profile_path})`,
              }}
            ></div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CartList;
