import FeatureSection from "./Components/FeatureCards";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F2EDC2] from-green-50 via-white to-white min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
       
        <div className="flex-1 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#e69100] leading-tight">
            RTC Vegetables Shop
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
          </div>
        </div>

      </div>

      <FeatureSection />

      <Footer />
    </div>
  );
}

export default App;