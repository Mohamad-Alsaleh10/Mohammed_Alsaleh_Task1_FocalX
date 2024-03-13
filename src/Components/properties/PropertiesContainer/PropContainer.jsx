import "./PropContStyle.css";
import property1 from "../../../assets/images/Props/property-01.jpg";
import property2 from "../../../assets/images/Props/property-02.jpg";
import property3 from "../../../assets/images/Props/property-03.jpg";
import property4 from "../../../assets/images/Props/property-04.jpg";
import property5 from "../../../assets/images/Props/property-05.jpg";
import property6 from "../../../assets/images/Props/property-06.jpg";
import PropertiesItem from "../PropertiesItem/PropertiesItem";
const PropContainer = () => {
  const propretyItemDetails = [
    {
      img: property1,
      cat: "Luxury Villa",
      price: "$2.264.000",
      details: "12 New Street Miami, OR 12650",
      beedrooms: 4,
      Bathrooms: 3,
      Area: "125m2",
      Floor: "25th",
      Parking: "2 cars",
    },
    {
      img: property2,
      cat: "Luxury Villa",
      price: "$1.180.000",
      details: "54 Mid Street Florida, OR 27001",
      beedrooms: 6,
      Bathrooms: 5,
      Area: "450m2",
      Floor: "3",
      Parking: "8 spots",
    },
    {
      img: property3,
      cat: "Luxury Villa",
      price: "$1.460.000",
      details: "26 Old Street Miami, OR 38540",
      beedrooms: 5,
      Bathrooms: 4,
      Area: "225m2",
      Floor: "3",
      Parking: "10 spots",
    },
    {
      img: property4,
      cat: "Apartment",
      price: "$2.264.000",
      details: "12 New Street Miami, OR 12650",
      beedrooms: 4,
      Bathrooms: 3,
      Area: "125m2",
      Floor: "25th",
      Parking: "2 cars",
    },
    {
      img: property5,
      cat: "Penthouse",
      price: "$2.264.000",
      details: "12 New Street Miami, OR 12650",
      beedrooms: 4,
      Bathrooms: 3,
      Area: "125m2",
      Floor: "25th",
      Parking: "2 cars",
    },
    {
      img: property6,
      cat: "Luxury Villa",
      price: "$2.264.000",
      details: "12 New Street Miami, OR 12650",
      beedrooms: 4,
      Bathrooms: 3,
      Area: "125m2",
      Floor: "25th",
      Parking: "2 cars",
    },
  ];
  return (
    <div className="row">
      {propretyItemDetails.map((value, index) => {
        return (
          <div key={index} className="col-lg-4 col-md-6">
            <PropertiesItem
              img={value.img}
              cat={value.cat}
              price={value.price}
              details={value.details}
              beedrooms={value.beedrooms}
              Bathrooms={value.Bathrooms}
              Area={value.Area}
              Floor={value.Floor}
              Parking={value.Parking}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PropContainer;
