import useDocumentTitle from "../hooks/useDocumentTitle";
import Banner from "./Banner";
import Dealerships from "./Dealerships";
// import Products from "./Products";
// import Review from "./Review";
import Lotties from "./Lotties";
import Motto from "./Motto";
import { Fade, Slide } from "react-awesome-reveal";

import ShowLatestCards from "./ShowLatestCards";
const Main = () => {
  useDocumentTitle(`Home|Sports Hub`);

  return (
    <div className="min-h-[600px] ">
      <div className="min-h-screen">
        <Banner></Banner>
      </div>
      <Slide direction="right">
        <Motto></Motto>
        <Dealerships></Dealerships>
      </Slide>
      <Fade duration={1000}>
        <Lotties></Lotties>
      </Fade>

      <ShowLatestCards></ShowLatestCards>
      {/* <Slide direction="right">
        <Outlet></Outlet>
      </Slide> */}

      {/* <Fade>
        <Review></Review>
      </Fade> */}
    </div>
  );
};

export default Main;
