import "./nasaimagerew.scss"


import React from 'react';

const Nasaimagerew = () => {
    return (
        <div className="nasaimagerew">
            <div className="nasaimagerew__items">
                <div className="nasaimagerew__item">
                    <img src="http://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001738/GSFC_20171208_Archive_e001738~orig.jpg" alt="img" className="nasaimagerew__img" />
                    <h4 className="nasaimagerew__img-title">NASA's Hubble Shows Milky Way is Destined for Head-On Collision</h4>
                </div>
                <div className="nasaimagerew__item">
                    <img src="http://images-assets.nasa.gov/image/a-sky-view-of-earth-from-suomi-npp_16611703184_o/a-sky-view-of-earth-from-suomi-npp_16611703184_o~orig.jpg" alt="img" className="nasaimagerew__img" />
                    <h4 className="nasaimagerew__img-title">A Sky View of Earth From Suomi NPP</h4>
                </div>
                <div className="nasaimagerew__item">
                    <img src="http://images-assets.nasa.gov/image/PIA18906/PIA18906~orig.jpg" alt="img" className="nasaimagerew__img" />
                    <h4 className="nasaimagerew__img-title">Sun Shines in High-Energy X-rays</h4>
                </div>
                <div className="nasaimagerew__item">
                    <img src="http://images-assets.nasa.gov/image/PIA17666/PIA17666~orig.jpg" alt="img" className="nasaimagerew__img" />
                    <h4 className="nasaimagerew__img-title">Rosetta at Comet</h4>
                </div>
              
            </div>
        </div>
    );
}

export default Nasaimagerew;
