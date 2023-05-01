import Footer from "../../common/footer/Footer";
import Navbar from "../../common/navbar/Navbar";
import Maillist from "../../components/maillist/Maillist";
import { DateRange } from "react-date-range";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import "./apod.scss";
import "react-datepicker/dist/react-datepicker.css";
import useFeatch from "react-fetch-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Cartrangephoto from "../../components/cartrangephoto/Cartrangephoto";
import Cartbigapod from "../../components/cartbigapod/Cartbigapod";

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

  const {data} = useFeatch(
    `https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${rangeStartDay}&end_date=${rangeEndDay}`
  );

  useEffect(() => {
    let newAr = [];
    data?.map((item) => newAr.push(item));
    setOut(newAr);
  }, [rangeStartDay, rangeEndDay, data]);

  const [photoNum, setPhotoNum] = useState(0);
  const [openPhoto, setOpenPhoto] = useState(false);

  function hendleOpen(index) {
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
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="apod__arrow-l"
            onClick={() => handleMove("l")}
          />
          <Cartbigapod item={out[photoNum]} />
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="apod__arrow-r"
            onClick={() => handleMove("r")}
          />
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
                <h3 className="apod__search-title">
                  Choose one date or range{" "}
                </h3>
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="apod__range-result">
          {out.map((item, index) => ( <Cartrangephoto
          index={index}
          item={item}
          onClick={() => hendleOpen(index)}
          />))}
        </section>
      </div>

      <Maillist />
      <Footer />
    </div>
  );
};

export default Apod;
