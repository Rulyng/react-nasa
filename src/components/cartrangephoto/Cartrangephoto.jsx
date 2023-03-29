
import React from 'react';

const Cartrangephoto = ({item, index, onClick}) => {
    return (
        <div key={index} className="apod__rangephoto-container">
              <img
                className="apod__rangephoto-img"
                onClick={onClick}
                src={item.url}
                alt="img"
                width="200"
              />
              <div className="apod__rangephoto-desc">
                <h4 className="apod__rangephoto-title">{item.title}</h4>
                <h5 className="apod__rangephoto-date">{item.date}</h5>
              </div>
            </div>
    );
}

export default Cartrangephoto;
