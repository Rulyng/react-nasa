import React from "react";

const Cartbigrover = ({ item }) => {
  return (
    <div className="rovers__bigphoto-wrap">
      <img src={item.img_src} alt="img" className="rovers__bigphoto-img" />
      <div className="rovers__bigphoto-desc">
        <h3 className="rovers__bigphoto-rover name">
          {" "}
          <i>Rover name: </i> {item.rover.name}
        </h3>
        <h4 className="rovers__bigphoto-title name">
          <i>Sol: </i> {item.sol}
        </h4>
        <h4 className="rovers__bigphoto-date name">
          <i>Earth date: </i> {item.earth_date}
        </h4>
        <h4 className="rovers__bigphoto-date name">
          <i>Launch date: </i> {item.rover.launch_date}
        </h4>
      </div>
    </div>
  );
};

export default Cartbigrover;
