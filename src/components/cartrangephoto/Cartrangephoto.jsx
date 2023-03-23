import "./cartrangephoto.scss"
import React from 'react';

const Cartrangephoto = ({item}) => {
    return (
        <div className="cart-rangephoto">
             <img className="cart-rangephoto__img" src={item.url} alt="img" width='200'/>
            <div className="cart-rangephoto__desc">
                 <h2 className="cart-rangephoto__title">{item.title}</h2>
             <h5 className="cart-rangephoto__date">{item.date}</h5>
            </div>
            {/* <p className="cart-rangephoto__text"><b>Explanation:</b> {item.explanation}</p> */}
        </div>
    );
}

export default Cartrangephoto;
