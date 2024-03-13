import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./MainBannerStyle.css";

const MainBanner = () => {
 return (
    <div className="main-banner">
      <OwlCarousel
        className="owl-theme owl-loaded owl-drag"
        loop
        margin={10}
        nav
        dots={true}
        items={3}
        responsive={{
          0: { items: 1 },
          1700: { items: 2 },
          2000: { items: 3 }
        }}
      >
        <div className="item item-1">
        <div className="header-text">
          <span className="category">Toronto, <em>Canada</em></span>
          <h2>Hurry!<br></br>Get the Best Villa for you</h2>
        </div>
        </div>
        <div className="item item-2">
        <div className="header-text">
          <span className="category">Melbourne, <em>Australia</em></span>
          <h2>Be Quick!<br></br>Get the best villa in town</h2>
        </div>
        </div>
        <div className="item item-3">
        <div className="header-text">
          <span className="category">Miami, <em>South Florida</em></span>
          <h2>Act Now!<br></br>Get the highest level penthouse</h2>
        </div>
        </div>
      </OwlCarousel>
    </div>
 );
};

export default MainBanner;