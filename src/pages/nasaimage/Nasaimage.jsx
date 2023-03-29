import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import Footer from "../../common/footer/Footer";
import Navbar from "../../common/navbar/Navbar";
import Cartbignasaimg from "../../components/cartbignasaimg/Cartbignasaimg";
import Cartnasaimg from "../../components/cartnasaimg/Cartnasaimg";
import Maillist from "../../components/maillist/Maillist";
import "./nasaimage.scss";

const Nasaimage = () => {
  const [out, setOut] = useState([]);

  let inpValue = useRef();

  useEffect(() => {
    fetch(
      `https://images-api.nasa.gov/search?q=${inpValue.current.value}&page_size=12`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let newArr = [];
        data.collection.items.map((item) => newArr.push(item));
        setOut(newArr);
      });
  }, []);

  const handle = useCallback(() => {
    fetch(
      `https://images-api.nasa.gov/search?q=${inpValue.current.value}&page_size=12`
    )
      .then((response) => response.json())
      .then((data) => {
        let newArr = [];
        data.collection.items.map((item) => newArr.push(item));
        setOut(newArr);
      });
  }, []);

  const [openPhoto, setOpenPhoto] = useState(false);
  const [photoNum, setPhotoNum] = useState(0);

  function handleOpen(index) {
    setPhotoNum(index);
    setOpenPhoto(true);
  }

  function handleMove(direction) {
    let newphotoNum;
    if (direction === "l") {
      newphotoNum = photoNum === 0 ? out.length - 1 : photoNum - 1;
    } else {
      newphotoNum = photoNum === out.length - 1 ? 0 : photoNum + 1;
    }
    setPhotoNum(newphotoNum);
  }

  return (
    <div className="nasaimage-wrap">
      {openPhoto && (
        <div className="nasaimage__photo-big">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="nasaimage__close"
            onClick={() => {
              setOpenPhoto(false);
            }}
          />
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="nasaimage__arrow-l"
            onClick={() => handleMove("l")}
          />
          <Cartbignasaimg item={out[photoNum]} />
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="nasaimage__arrow-r"
            onClick={() => handleMove("r")}
          />
        </div>
      )}
      <Navbar />
      <div className="nasaimage">
        <section className="nasaimage__hero">
          <h2 className="nasaimage__hero-title"> NASA Image Library</h2>
          <h3 className="nasaimage__hero-desc">
            Search and view images of astronomical objects
          </h3>
        </section>

        <section className="nasaimage__main">
          <div className="container nasaimage__container">
            <div className="nasaimage__search-row">
              <input
                defaultValue="nebula"
                ref={inpValue}
                className="nasaimage__inp"
                type="text"
              />
              <button className="nasaimage__btn" onClick={handle}>
                Search
              </button>
            </div>

            <div className="nasaimage__result">
              {out.map((item, index) => (
                <Cartnasaimg
                  item={item}
                  index={index}
                  onClick={() => handleOpen(index)}
                />
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

export default Nasaimage;
