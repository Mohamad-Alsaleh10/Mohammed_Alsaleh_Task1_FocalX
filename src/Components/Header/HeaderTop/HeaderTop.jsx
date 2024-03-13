import "./HeaderTopStyle.css";
import { FaEnvelope } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeaderTop = () => {
  return (
    // <div className="header-top">
    //   <div className="left-item">
    //     <div>
    //       <ul>
    //         <li>
    //           <FaEnvelope />
    //         </li>
    //         <li> info@company.com</li>
    //       </ul>
    //     </div>
    //     <div>
    //       <ul>
    //         <li>
    //           <FaMap />
    //         </li>
    //         <li> Sunny Isles Beach, FL 33160</li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="right-item">
    //     <ul className="social-links">
    //       <li>
    //         <a href="#">
    //         <FaFacebook />

    //         </a>
    //       </li>
    //       <li>
    //         <a href="https://x.com/minthu" target="_blank">
    //           <FaTwitter />
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#">
    //           <FaLinkedin />
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#">
    //           <FaInstagram />
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>

    <div className="sub-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <ul className="info">
              <li>
                 <FaEnvelope/> info@company.com
              </li>
              <li>
                <FaMap/> Sunny Isles Beach, FL 33160
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4">
            <ul className="social-links">
              <li>
                <a href="#">
                   <FaFacebook/>
                </a>
              </li>
              <li>
                <a href="https://x.com/minthu" target="_blank">
                   <FaTwitter/>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin/>
                </a>
              </li>
              <li>
                <a href="#">
                    <FaInstagram/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
