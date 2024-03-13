import "./FeaturedStyle.css";
import feature from "../../assets/images/Featured/featured.jpg";
import featureicon from "../../assets/images/Featured/featured-icon.png";
import infoIcon1 from "../../assets/images/Featured/info-icon-01.png";
import infoIcon2 from "../../assets/images/Featured/info-icon-02.png";
import infoIcon3 from "../../assets/images/Featured/info-icon-03.png";
import infoIcon4 from "../../assets/images/Featured/info-icon-04.png";
import InfoTable from "./InfoTable/InfoTable";
import Accordion from "./Acoordion/Accordion";

const Feature = () => {
  return (
    <div className="featured section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="left-image">
              <img src={feature} alt="" />
              <a href="property-details.html">
                <img
                  src={featureicon}
                  alt=""
                  style={{ maxWidth: 60, padding: 0 }}
                />
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-heading">
              <h6>| Featured</h6>
              <h2>Best Appartment &amp; Sea view</h2>
            </div>
            <Accordion />
          </div>
          <div className="col-lg-3">
            <InfoTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
