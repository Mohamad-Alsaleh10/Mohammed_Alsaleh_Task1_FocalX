import "./ContactContentStyle.css";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import Form from "../Form/Form";
import Map from "../Map/Map";
import InfoDetail from "../InfoDetails/InfoDetail";
const ContactContent = () => {
  return (
    <div className="contact-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <Map />
            <InfoDetail />
          </div>
          <div className="col-lg-5">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
