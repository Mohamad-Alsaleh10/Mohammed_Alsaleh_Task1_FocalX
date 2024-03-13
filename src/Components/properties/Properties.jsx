import "./PropertiesStyle.css";

import PropertiesItem from "./PropertiesItem/PropertiesItem";
import PropContainer from "./PropertiesContainer/PropContainer";
// img,cat,price,details,beedrooms,Bathrooms,Area,Floor,Parking

const Properties = () => {
  return (
    <div className="properties section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <div className="section-heading text-center">
              <h6>| Properties</h6>
              <h2>We Provide The Best Property You Like</h2>
            </div>
          </div>
        </div>

        <PropContainer />
      </div>
    </div>
  );
};

export default Properties;
