import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import Footer from "../../common/footer/Footer";
import Navbar from "../../common/navbar/Navbar";
import Maillist from "../../components/maillist/Maillist";
import "./rovers.scss";

const Rovers = () => {
  const key = "QN4qwbYu7iiQqQnMm2WyXT0gRLCFlepiRlAfghbP";
  const inpValueDate = useRef();
  const [selectValue, setSelectValue] = useState("");
  const [out, setOut] = useState([]);

  const [roverNum, setRoverNum] = useState(0);
  const [openPhoto, setOpenPhoto] = useState(false);

  function handleRadio(e) {
    setSelectValue(e.target.value);
  }

  const handleRover = useCallback(() => {

    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectValue}/photos?earth_date=${inpValueDate.current.value}&camera=NAVCAM&page=1&api_key=${key}`
    )
      .then((response) => response.json())
      .then((data) => {
        let newarr = [];
        data.photos.map((item) => newarr.push(item));
        setOut(newarr);
      });
     
  }, [selectValue, inpValueDate]);

  function handleOpen(i){
    setRoverNum(i);
    setOpenPhoto(true)
  }

  function handleMove (direction){
    let newRoverNum;
    if(direction === "l"){
      newRoverNum = roverNum === 0 ? out.length-1 : roverNum - 1
    } else{
      newRoverNum = roverNum === out.length-1 ? 0 : roverNum + 1
    }

    setRoverNum(newRoverNum)

  }

  return (
    <div className="wrap-rovers">
       {openPhoto && <div className="rovers__bigphoto">
       
         <FontAwesomeIcon icon={faCircleXmark} 
         className="rovers__close" 
         onClick={()=> setOpenPhoto(false)} />
        <div className="rovers__bigphoto-wrap">
        <FontAwesomeIcon icon={faCircleArrowLeft} className="rovers__arrow"
        onClick={()=> handleMove("l")} />
        <img src={out[roverNum].img_src} alt="img" className="rovers__bigphoto-img"/>
        <div className="rovers__bigphoto-desc">
        <h3 className="rovers__bigphoto-rover name"> <i>Rover name: </i> {out[roverNum].rover.name}</h3>
             <h4 className="rovers__bigphoto-title name"><i>Sol: </i>  {out[roverNum].sol}</h4>
             <h4 className="rovers__bigphoto-date name"><i>Earth date: </i>  {out[roverNum].earth_date}</h4>
             <h4 className="rovers__bigphoto-date name"><i>Launch date: </i> {out[roverNum].rover.launch_date}</h4>
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className="rovers__arrow"
        onClick={()=> handleMove("r")} />
        </div>
        
        </div>}
      <Navbar />
      <div className="rovers">
        <section className="rovers__hero">
          <h2 className="rovers__hero-title"> Mars Rover Photos</h2>
          <h3 className="rovers__hero-desc">
            This Page is designed to collect image data gathered by NASA's
            Curiosity, Opportunity, and Spirit rovers on Mars and make it more
            easily available to other developers, educators, and citizen
            scientists
          </h3>
        </section>
        <section className="rovers__main">
          <div className="container rovers__container">
            <div className="rovers__description">
              <p className="rovers__text">
                Most rovers did not start taking photos until several days after
                landing.
              </p>
              <p className="rovers__tex">Curiosity landed on: 2012-08-06</p>
              <p className="rovers__tex">Opportunity landed on: 2004-01-25</p>
              <p className="rovers__tex">Spirit landed on: 2004-01-04</p>
            </div>
            <div className="rovers__search">
              <div className="rovers__search-container">
                <h2 className="rovers__search-text">Choose a rover</h2>
                <div className="rovers__input-radio-row">
                  <label htmlFor="curiosity" className="rovers__input-label">
                    <input
                      type="radio"
                      name="rover"
                      id="curiosity"
                      value="curiosity"
                      className="rovers__radio-inp"
                      checked={selectValue === "curiosity"}
                      onChange={handleRadio}
                    />
                    Curiosity
                  </label>

                  <label htmlFor="opportunity" className="rovers__input-label">
                    <input
                      type="radio"
                      name="rover"
                      id="opportunity"
                      value="opportunity"
                      className="rovers__radio-inp"
                      checked={selectValue === "opportunity"}
                      onChange={handleRadio}
                    />
                    Opportunity
                  </label>

                  <label htmlFor="spirit" className="rovers__input-label">
                    <input
                      type="radio"
                      name="rover"
                      id="spirit"
                      value="spirit"
                      className="rovers__radio-inp"
                      checked={selectValue === "spirit"}
                      onChange={handleRadio}
                    />
                    Spirit
                  </label>
                </div>
                <div className="rovers__input-text-container">
                  <h2 className="title">Enter the date</h2>
                  <h3>Format: YYYY-MM-DD</h3>
                  <input
               
                  defaultValue="2015-10-22"
                    type="text"
                    className="rovers__input-date"
                    ref={inpValueDate}
                  />
                </div>
                <button className="rovers__search-btn" onClick={handleRover}>
                  Search
                </button>
              </div>
            </div>
            <div className="rovers__result">
              {out.map((item, i) => (
                <div key={i} className="rovers__item">
                  <img
                    onClick={() => handleOpen(i)}
                    className="rovers__img"
                    src={item.img_src}
                    alt="img"
                  />
                  <div className="rovers__item-desc"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Maillist />
      <Footer />
    </div>
  );
};

export default Rovers;
