import "./PropertiesItemStyle.css";

const PropertiesItem = ({img,cat,price,details,beedrooms,Bathrooms,Area,Floor,Parking}) => {
  return (
    <div className="item">
      <a href="property-details.html">
        <img src={img} alt="" />
      </a>
      <span className="category">{cat}</span>
      <h6>{price}</h6>
      <h4>
        <a href="property-details.html">{details}</a>
      </h4>
      <ul>
        <li>
          Bedrooms: <span>{beedrooms}</span>
        </li>
        <li>
          Bathrooms: <span>{Bathrooms}</span>
        </li>
        <li>
          Area: <span>{Area}</span>
        </li>
        <li>
          Floor: <span>{Floor}</span>
        </li>
        <li>
          Parking: <span>{Parking}</span>
        </li>
      </ul>
      <div className="main-button">
        <a href="property-details.html">Schedule a visit</a>
      </div>
    </div>
  );
};

export default PropertiesItem;
