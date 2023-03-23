import React, { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';
import Footer from '../../common/footer/Footer';
import Navbar from '../../common/navbar/Navbar';
import Maillist from '../../components/maillist/Maillist';
import './nasaimage.scss'

const Nasaimage = () => {
  const [out, setOut] = useState([]);
  // const [inp, setInp] = useState("saturn");
  let inpValue = useRef();

  useEffect(() => {
    fetch(
      `https://images-api.nasa.gov/search?q=${inpValue.current.value}&page_size=6`
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
      `https://images-api.nasa.gov/search?q=${inpValue.current.value}&page_size=6`
      )
        .then((response) => response.json())
        .then((data) => {
          let newArr = [];
          data.collection.items.map((item) => newArr.push(item));
          setOut(newArr);
          console.log(newArr);
        });
    }, []);


  return (
    <div className="nasaimage-wrap">
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
                defaultValue="saturn"
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
                  />
               
                  <div className="nasaimage__image-desc">
                    <h4 className="nasaimage__image-title">
                      {item.data[0].title}
                    </h4>
                    <h5 className="nasaimage__image-date">
                      {item.data[0].date_created}
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
