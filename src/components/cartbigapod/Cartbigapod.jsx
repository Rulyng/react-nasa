import React from 'react';

const Cartbigapod = ({item}) => {
    return (
        <div className="apod__photo-wrap">
        <h2 className="apod__rangephoto-wrap-title">
          {item.title}
        </h2>
        <h5 className="apod__rangephoto-wrap-date">{item.date}</h5>
        <img
          className="apod__rangephoto-wrap-img"
          src={item.url}
          alt="img"
        />
        <p className="apod__rangephoto-wrap-text">
          <b>Explanation:</b> {item.explanation}
        </p>
      </div>
    );
}

export default Cartbigapod;
