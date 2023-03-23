// import { format } from "date-fns";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import {useLocation} from "react-router-dom";
import Footer from "../../common/footer/Footer";
import Navbar from "../../common/navbar/Navbar";
import Maillist from "../../components/maillist/Maillist";
import "./apodpfoto.scss";
import Cartonephoto from "../../components/cartOnePhoto/Cartonephoto";


const Apodphoto = () => {
    const location = useLocation();
    const [startDate3, setStartDate3] = useState(location.state)
    const [startDate2, setStartDate2] = useState(new Date());


    console.log(location);
    // console.log(startDate1);

  
  
    return (
        
        
    <div className="wrap-apodphoto">
      <Navbar />
    <div className="container apodphoto__container">
<div className="apodphoto__wrap">
    <div className="apodphoto__search">
       <h2 className="apodphoto__search-title">Search</h2>
       <div className="apodphoto__search-item">
        <label>Choose one date</label>
        <span>  
            <ReactDatePicker
             dateFormat="yyyy-MM-dd"
             selected={startDate2}
      onChange={(date) => setStartDate2(date)}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      maxDate={new Date()}
      minDate={new Date('1995, 07, 01')}
      className='apodphoto__one-date'
    /></span>
      
       </div>
    </div>

    <div className="apodphoto__result">
{/* {apodPhoto} */}
    </div>
</div>

    </div>
      <Maillist />
      <Footer />
    </div>
  );
};

export default Apodphoto;
