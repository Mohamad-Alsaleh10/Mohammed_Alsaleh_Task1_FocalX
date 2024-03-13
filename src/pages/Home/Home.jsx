import BestDeal from "../../Components/Bestdeal/BestDeal";
import ContactContent from "../../Components/ContactContent/ContactContent";
import MainBanner from "../../Components/MainBanner/MainBanner";
import VideoContent from "../../Components/Video/VideoContent/VideoContent";
import VideoSection from "../../Components/Video/VideoSection/VideoSection";
import ContactSection from "../../Components/contactSection/ContactSection";
import Feature from "../../Components/featured/Feature";
import Funfacts from "../../Components/funfacts/Funfacts";
import Properties from "../../Components/properties/Properties";
import "./HomeStyle.css";

const Home = () => {
  return (
    <>
      <MainBanner />
      <Feature />
      <VideoSection />
      <VideoContent />
      <Funfacts />
      <BestDeal />
      <Properties />
      <ContactSection />
      <ContactContent />
    </>
  );
};

export default Home;
