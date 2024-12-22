import Lottie from "lottie-react";
import football from "../../public/assets/football.json";
import treadmill from "../../public/assets/treadmill-run.json";
const Lotties = () => {
  return (
    <div className="flex my-12">
      <Lottie animationData={football} className="w-1/2"></Lottie>
      <Lottie animationData={treadmill} className="w-1/2"></Lottie>
    </div>
  );
};

export default Lotties;
