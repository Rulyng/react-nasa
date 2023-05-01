import "./nasaimagerew.scss";

import React from "react";

const Nasaimagerew = () => {
  return (
    <div className="nasaimagerew">
      <div className="nasaimagerew__items">
        <div className="nasaimagerew__item">
          <img
            src="https://stsci-opo.org/STScI-01EVSRDH0A23KPHYSZJY4KA159.png"
            alt="img"
            className="nasaimagerew__img"
          />
          <h4 className="nasaimagerew__img-title">
            NASA's Hubble Shows Milky Way is Destined for Head-On Collision
          </h4>
        </div>
        <div className="nasaimagerew__item">
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/25/2021/08/01-Apollo-16-Earth-e8af703-e1630404532976.jpg?quality=90&resize=980,654"
            alt="img"
            className="nasaimagerew__img"
          />
          <h4 className="nasaimagerew__img-title">
            A Sky View of Earth From Suomi NPP
          </h4>
        </div>
        <div className="nasaimagerew__item">
          <img
            src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2014/09/rosetta_and_its_target_comet/14772820-1-eng-GB/Rosetta_and_its_target_comet.jpg"
            alt="img"
            className="nasaimagerew__img"
          />
          <h4 className="nasaimagerew__img-title">Rosetta at Comet</h4>
        </div>
      </div>
    </div>
  );
};

export default Nasaimagerew;
