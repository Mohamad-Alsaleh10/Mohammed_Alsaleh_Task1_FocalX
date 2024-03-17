import "./VideoContentStyle.css";
import VideoFram from '../../../assets/images/Video/video-frame.jpg'
import { FaPlay } from "react-icons/fa";

const VideoContent = () => {
  return (
    <div className="video-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="video-frame">
              <img src={VideoFram} alt="" />
              <a href="https://youtube.com" target="_blank">
              <FaPlay />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
