import "./cartonephoto.scss"
import React from 'react';

const Cartonephoto = ({item}) => {
    return (
        <div className="cart-onephoto">
             <h2 class="cart-onephoto__title">{item.title}</h2>
             <h5 class="cart-onephoto__date">{item.date}</h5>
           <img class="cart-onephoto__img" src={item.url} alt="img" width='500'/>
            <p class="cart-onephoto__text"><b>Explanation:</b> {item.explanation}</p>
        </div>
    );
}

export default Cartonephoto;
