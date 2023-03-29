

import React from 'react';

const Cartrover = ({item, i, onClick}) => {
    return (
        <div key={i} className="rovers__item">
        <img
          onClick={onClick}
          className="rovers__img"
          src={item.img_src}
          alt="img"
        />
      </div>
    );
}

export default Cartrover;
