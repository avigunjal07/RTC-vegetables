import FeatureSection from "./Components/FeatureCards";
// import ImgMainHeader from "./../assets/main-header.jpg";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  return (
    <div className="bg-linear-to-b from-green-50 via-white to-white min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
       
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#e69100] leading-tight">
            Here is what you need to stay healthy
          </h1>

          <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-md mx-auto md:mx-0">
            Fresh vegetables, wellness tips, and healthy living essentials at your fingertips.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center md:justify-start">
            <Button
              title={"Explore Now"}
              onClick={() => navigate("/vegetables")}
              variant="primary"
              size="medium"
            />
            <Button title={"Call Us"} variant="tertiary" size="medium" />
          </div>
        </div>

       
        {/* <div className="flex-1">
          <img
            src={ImgMainHeader}
            alt="Healthy Lifestyle"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div> */}
      </div>

      <FeatureSection />

      <Footer />
    </div>
  );
}

export default App;