import React from "react";

const Cartbignasaimg = ({ item }) => {
  return (
    <div className="nasaimage__photo-wrap">
      <img
        src={item.links[0].href}
        alt="img"
        className="nasaimage__photo-img"
      />
      <div className="nasaimage__photo-text">
        <h4 className="nasaimage__photo-title">{item.data[0].title}</h4>
        <h4 className="nasaimage__photo-date">
          <b>Date: </b>
          {item.data[0].date_created.slice(0, 10)}
        </h4>
        <h5 className="nasaimage__photo-description">
          {" "}
          <b>Explanation: </b>
          {item.data[0].description}
        </h5>
      </div>
    </div>
  );
};

export default Cartbignasaimg;
