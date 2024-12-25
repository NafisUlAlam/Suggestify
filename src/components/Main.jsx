import useDocumentTitle from "../hooks/useDocumentTitle";
import Banner from "./Banner";
import Dealerships from "./Dealerships";

import Lotties from "./Lotties";
import Motto from "./Motto";
import { Fade, Slide } from "react-awesome-reveal";

import ShowLatestCards from "./ShowLatestCards";
import Review from "./Review";
const Main = () => {
  useDocumentTitle(`Home|Suggestify`);

  return (
    <div className="min-h-[600px] ">
      <div className="min-h-screen">
        <Banner></Banner>
      </div>
      <Slide direction="right">
        <Motto></Motto>
        <Dealerships></Dealerships>
      </Slide>
      <Fade duration={500}>
        <Lotties></Lotties>
      </Fade>

      <Fade duration={700}>
        <ShowLatestCards></ShowLatestCards>
      </Fade>
      <Fade duration={900}>
        <Review></Review>
      </Fade>
    </div>
  );
};

export default Main;
