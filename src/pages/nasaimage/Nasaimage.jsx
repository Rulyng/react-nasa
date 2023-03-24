import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';
import Footer from '../../common/footer/Footer';
import Navbar from '../../common/navbar/Navbar';
import Maillist from '../../components/maillist/Maillist';
import './nasaimage.scss'

const Nasaimage = () => {
  const [out, setOut] = useState([]);
  

  let inpValue = useRef();

  useEffect(() => {
    fetch(
      `https://images-api.nasa.gov/search?q=${inpValue.current.value}&page_size=2`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let newArr = [];
        data.collection.items.map((item) => newArr.push(item));
        setOut(newArr);
      });
  }, []);

      const handle =  useCallback(() => {
        fetch(
      `https://images-api.nasa.gov/search?q=${inpValue.current.value}&page_size=9`
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

    function handleOpen(index){
      setPhotoNum(index);
      setOpenPhoto(true);
    }

    function handleMove (direction){
      let newphotoNum;
      if(direction === "l"){
        newphotoNum = photoNum === 0 ? out.length-1 : photoNum - 1
      } else{
        newphotoNum = photoNum === out.length-1 ? 0 : photoNum + 1
      }
      setPhotoNum(newphotoNum)
    }

  return (
    <div className="nasaimage-wrap">
      {openPhoto && (
      <div className="nasaimage__photo-big">
        <FontAwesomeIcon icon={faCircleXmark} 
        className="nasaimage__close"
        onClick={() => {
          setOpenPhoto(false);
        }}
        />
        <FontAwesomeIcon icon={faCircleArrowLeft} 
        className="nasaimage__arrow-l"
        onClick={()=> handleMove("l")}  />
              <div className="nasaimage__photo-wrap">
              <img src={out[photoNum].links[0].href} alt="img" className="nasaimage__photo-img"/>
                <div className="nasaimage__photo-text">
                  <h4 className="nasaimage__photo-title">{out[photoNum].data[0].title}</h4>
                  <h4 className="nasaimage__photo-date"><b>Date: </b>{out[photoNum].data[0].date_created.slice(0, 10)}</h4>
                  <h5 className="nasaimage__photo-description"> <b>Explanation: </b>{out[photoNum].data[0].description}</h5>
                </div>

              </div>
              <FontAwesomeIcon icon={faCircleArrowRight} 
              className="nasaimage__arrow-r"
              onClick={()=> handleMove("r")}/>
      </div>)}
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
                <div key={index} className="nasaimage__image-item">
                  <img
                    className="nasaimage__image-img"
                    src={item.links[0].href}
                    alt="img"
                    width="200"
                    onClick={() => handleOpen(index)}
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
              ))}
            </div>
          </div>
        </section>
      </div>
      <Maillist />
      <Footer />
    </div>
  );
}

export default Nasaimage;
