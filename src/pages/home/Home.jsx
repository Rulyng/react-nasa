import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Navbar from "../../common/navbar/Navbar";
import Apodreview from "../../components/apodreview/Apodreview";
import Maillist from "../../components/maillist/Maillist";
import Roverreview from "../../components/roverreview/Roverreview";
import "./home.scss";

const Home = () => {
  return (
    <div className="wrap-home">
      <Navbar />
      <Header />
      <div className="home">
        <div className="container home__container">
          <h2 className="about__title">About this App</h2>
          <h3 className="title apodreview__title">
            Сhoose Astronomy Picture of the Day
          </h3>
          <Apodreview />
          <h3 className="title roverreview__title">Explore mars</h3>
          <Roverreview />
        </div>
        <Maillist />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
