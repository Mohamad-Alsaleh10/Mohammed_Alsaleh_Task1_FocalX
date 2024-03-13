import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderTop from "./Components/Header/HeaderTop/HeaderTop";
import Navbar from "./Components/Header/Navbar/Navbar";

import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import Properties from "./pages/Properties/Properties";
import PropertyDetail from "./pages/PropertyDetails/PropertyDetail";
import ContactPage from "./pages/ContactUs/ContactPage";

function App() {
  return (
    <>
      <HeaderTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property_detail" element={<PropertyDetail />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
