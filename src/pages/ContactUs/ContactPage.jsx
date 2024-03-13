import Form from "../../Components/Form/Form";
import Hero from "../../Components/HeroSection/Hero";
import InfoDetail from "../../Components/InfoDetails/InfoDetail";
import Map from "../../Components/Map/Map";
import './ContactPage.css'
const ContactPage = () => {
  return (
    <>
      <Hero page="Contact Us" />
      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>| Contact Us</h6>
                <h2>Get In Touch With Our Agents</h2>
              </div>
              <p>
                When you really need to download free CSS templates, please
                remember our website TemplateMo. Also, tell your friends about
                our website. Thank you for visiting. There is a variety of
                Bootstrap HTML CSS templates on our website. If you need more
                information, please contact us.
              </p>
              <InfoDetail style="ma-infodDetail" />
            </div>
            <div className="col-lg-6">
              <Form />
            </div>
            <div className="col-lg-12">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
