import './roverreview.scss'

const Roverreview = () => {
    return (
        <div className='roverreview'>
            <div className="container roverreview__container">
                <div className="roverreview__items">
                <div className="roverreview__item">
                  <div className="roverreview__img1">
                    <img src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02240/opgs/edr/fcam/FLA_596357839EDR_F0730550FHAZ00337M_.JPG" alt="" className="roverreview__item-img" />
                  </div>
                  <h4 className="roverreview__rover-name">Rover: Curioustity </h4> 
                  <span className="roverreview__rover-date">Earth date: 2018-11-24</span>
                  <span className="roverreview__roversol">Sol: 1184</span>
                </div>
                <div className="roverreview__item">
                  <div className="roverreview__img1">
                    <img src="http://mars.nasa.gov/mer/gallery/all/1/f/526/1F174881340EFF56NXP1235L0M1-BR.JPG" className="roverreview__item-img" alt=''/>
                  </div>
                  <h4 className="roverreview__rover-name">Rover: Opportunity  </h4> 
                  <span className="roverreview__rover-date">Earth date: 2007-10-12</span>
                  <span className="roverreview__roversol">Sol: 108</span>
                </div>
                <div className="roverreview__item">
                  <div className="roverreview__img1">
                    <img src="https://d2pn8kiwq2w21t.cloudfront.net/original_images/missionswebmer.jpg" className="roverreview__item-img" alt=''/>
                  </div>
                  <h4 className="roverreview__rover-name">Rover: Spirit </h4> 
                  <span className="roverreview__rover-date">Earth date: 2006-07-18</span>
                  <span className="roverreview__roversol">Sol: 579</span>
                </div>    
             
                </div>

            </div>
           
        </div>
    );
}

export default Roverreview;
