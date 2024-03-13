import { MdOutlineEmail } from "react-icons/md";
import "./InfoDetailStyle.css";
import { FaPhone } from "react-icons/fa";
const InfoDetail = ({style}) => {
  return (
    <div className={`row ${style}`}>
      <div className="col-lg-6 ">
        <div className="item phone">
          <FaPhone />
          <h6>
            010-020-0340
            <br />
            <span>Phone Number</span>
          </h6>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="item email">
          <MdOutlineEmail />
          <h6>
            info@villa.co
            <br />
            <span>Business Email</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default InfoDetail;
