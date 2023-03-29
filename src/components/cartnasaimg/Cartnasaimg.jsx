
import React from 'react';

const Cartnasaimg = ({index, item, onClick}) => {
    return (
        <div key={index} className="nasaimage__image-item">
        <img
          className="nasaimage__image-img"
          src={item.links[0].href}
          alt="img"
          width="200"
          onClick={onClick}
        />
        <div className="nasaimage__image-desc">
          <h4 className="nasaimage__image-title">
            {item.data[0].title}
          </h4>
          <h5 className="nasaimage__image-date">
            {item.data[0].date_created.slice(0, 10)}
          </h5>
        </div>
      </div>
    );
}

export default Cartnasaimg;
