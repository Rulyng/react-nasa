import Footer from "../../common/footer/Footer";
import Navbar from "../../common/navbar/Navbar";
import Maillist from "../../components/maillist/Maillist";
import { DateRange } from "react-date-range";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import "./apod.scss";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useFeatch from 'react-fetch-hook'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Apod = () => {


  const [out, setOut] = useState([]);

  const [openDate, setopenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const key = "QN4qwbYu7iiQqQnMm2WyXT0gRLCFlepiRlAfghbP";
  let rangeStartDay = `${format(date[0].startDate, "yyyy-MM-dd")}`;
  let rangeEndDay = `${format(date[0].endDate, "yyyy-MM-dd")}`;

  const { data } = useFeatch(
    `https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${rangeStartDay}&end_date=${rangeEndDay}`
  );

    useEffect(() => {
  let newAr = [];
  data?.map(item => newAr.push(item));
  setOut(newAr);
    }, [rangeStartDay, rangeEndDay, data]);

  const [photoNum, setPhotoNum] = useState(0);
  const [openPhoto, setOpenPhoto] = useState(false);

  function hendleOpen(i) {
    setPhotoNum(i);
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
    <div className="wrap-apod">
      {openPhoto && (
        <div className="apod__photo-big">
          <FontAwesomeIcon
              className="apod__close"
              onClick={() => {
                setOpenPhoto(false);
              }}
              icon={faCircleXmark}
            />
             <FontAwesomeIcon icon={faCircleArrowLeft} className="apod__arrow-l"
             onClick={()=> handleMove("l")} />
          <div className="apod__photo-wrap">
         
            

            <h2 className="apod__rangephoto-wrap-title">
              {out[photoNum].title}
            </h2>
            <h5 className="apod__rangephoto-wrap-date">{out[photoNum].date}</h5>
            <img
              className="apod__rangephoto-wrap-img"
              src={out[photoNum].url}
              alt="img"
            />
            <p className="apod__rangephoto-wrap-text">
              <b>Explanation:</b> {out[photoNum].explanation}
            </p>
            
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="apod__arrow-r"
         onClick={()=> handleMove("r")}/>
        </div>
      )}
      <Navbar />
      <div className="apod">
        <section className="apod__hero">
          <h2 className="apod__hero-title"> Astronomy Picture of the Day</h2>
          <h3 className="apod__hero-desc">
            Each day a different image or photograph of our fascinating universe
            is featured, along with a brief explanation written by a
            professional astronomer.
          </h3>
        </section>
        <section className="apod__main">
          <div className="container apod__container">
            <div className="apod__desc">
              <p className="apod__text">
                The photos archive begins with June of 1995.
              </p>
              <p className="apod__text">
                For example: you can see what photo NASA was promoting on the
                exact day you was born.
              </p>
              <p className="apod__text">Just try it</p>
            </div>

            <div className="apod__search">
              <div className="apod__search-items">
                <h3 className="apod__search-title">Choose one date or range </h3>
                <div className="apod__search-item">
                  <span
                    onClick={() => setopenDate(!openDate)}
                    className="apod__search-date"
                  >
                    {`${format(date[0].startDate, "yyyy-MM-dd")} to ${format(
                      date[0].endDate,
                      "yyyy-MM-dd"
                    )}`}
                  </span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="apod__date"
                      minDate={new Date("1995, 07, 01")}
                      maxDate={new Date()}
                    />
                  )}
                  <button className="apod__btn">Search range</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="apod__range-result">
          {/* {out.map(item => <Cartrangephoto key={item} item={item}/>)} */}
          {out.map((item, i) => (
            <div key={i} className="apod__rangephoto-container">
              <img
                className="apod__rangephoto-img"
                onClick={() => hendleOpen(i)}
                src={item.url}
                alt="img"
                width="200"
              />
              <div className="apod__rangephoto-desc">
                <h2 className="apod__rangephoto-title">{item.title}</h2>
                <h5 className="apod__rangephoto-date">{item.date}</h5>
              </div>
              {/* <p className="apod__rangephoto-text"><b>Explanation:</b> {item.explanation}</p> */}
            </div>
          ))}
        </section>
      </div>

      <Maillist />
      <Footer />
    </div>
  );
};

export default Apod;
