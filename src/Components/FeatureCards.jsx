import IconDelivery from "../assets/delivery.jpg";
import IconFarming from "../assets/farming.jpg";
import IconFresh from "../assets/fresh.jpg";
import IconVariety from "../assets/variety.jpg";


function FeatureCard({ title, description, imgSrc }) {
  return (
    <div className="bg-white px-4 py-4 m-4 max-w-[320px] rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl">
      <img src={imgSrc} alt={title} className="h-40 mx-auto" />
      <h3 className="text-2xl font-semibold mt-4 text-center mb-2">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
}

const FEATURES_CONFIG = [
  {
    title: "Freshness Guaranteed",
    description:
      "We ensure that all our vegetables are fresh and of the highest quality.",
    imgSrc: IconFresh,
  },
  {
    title: "Wide Variety",
    description:
      "Choose from a wide range of vegetables to suit your culinary needs.",
    imgSrc: IconVariety,
  },
  {
    title: "Fast Delivery",
    description: "Get your vegetables delivered to your doorstep in no time.",
    imgSrc: IconDelivery,
  },
  {
    title: "Sustainable Farming",
    description:
      "We partner with local farmers who use sustainable farming practices.",
    imgSrc: IconFarming,
  },
];

function FeatureSection() {
  return (
    <>
      <h2 className="text-[25px]! md:text-[40px]! text-[#333] text-center mt-10 mb-0 mx-2 md:my-10">
        Why you should choose us? We provide the freshest vegetables
      </h2>

      <div className="flex flex-col justify-around items-center md:flex-row">
        {FEATURES_CONFIG.map((feat, index) => {
          const { title, description, imgSrc } = feat;

          return (
            <FeatureCard
              key={index}
              title={title}
              description={description}
              imgSrc={imgSrc}
            />
          );
        })}
      </div>
    </>
  );
}

export default FeatureSection;