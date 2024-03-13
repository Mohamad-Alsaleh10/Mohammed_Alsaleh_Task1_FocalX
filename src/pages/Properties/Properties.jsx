import Hero from "../../Components/HeroSection/Hero";
import PropContainer from "../../Components/properties/PropertiesContainer/PropContainer";
import "./PropertiesStyle.css";

const Properties = () => {
  return (
    <>
      <Hero page="Properties" />
      <div className="section properties">
        <div className="container">
          <ul className="properties-filter">
            <li>
              <a className="is_active" href="#!" data-filter="*">
                Show All
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".adv" className="">
                Apartment
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".str" className="">
                Villa House
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".rac" className="">
                Penthouse
              </a>
            </li>
          </ul>
         < PropContainer/>
          <div className="row">
            <div className="col-lg-12">
              <ul className="pagination">
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a className="is_active" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">&gt;&gt;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
