import Hero from "../../Components/HeroSection/Hero";
import InfoTable from "../../Components/featured/InfoTable/InfoTable";
import "./PropertyDetailStyle.css";
import Accordion from "../../Components/featured/Acoordion/Accordion";
import PropertyInfo from "../../Components/PropertyInfo/PropertyInfo";
import BestDeal from "../../Components/Bestdeal/BestDeal";

const PropertyDetail = () => {
  return (
    <>
      <Hero page="PropertyDetail" />

      <div className="single-property section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <PropertyInfo />
              <Accordion />
            </div>
            <div className="col-lg-4">
              <InfoTable />
            </div>
          </div>
        </div>
      </div>

      <BestDeal/>
    </>
  );
};

export default PropertyDetail;
