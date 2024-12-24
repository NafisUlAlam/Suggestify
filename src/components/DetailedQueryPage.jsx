import DetailedQueryCard from "./DetailedQueryCard";
import { useLoaderData } from "react-router-dom";
import RecommendationForm from "./RecommendationForm";
import RecommendationsList from "./RecommendationsList";
import TitleAndSubTitle from "./TitleAndSubTitle";

const DetailedQueryPage = () => {
  const query = useLoaderData();

  return (
    <div>
      <TitleAndSubTitle
        title={`Query Details & Recommendations`}
        subtitle={`Learn more about the product you're interested in and share your thoughts through a recommendation. View valuable insights and suggestions from others to help guide your decision.`}
      ></TitleAndSubTitle>
      <DetailedQueryCard query={query}></DetailedQueryCard>
      {/* recommendation form */}
      <RecommendationForm query={query}></RecommendationForm>
      <RecommendationsList queryId={query._id}></RecommendationsList>
    </div>
  );
};

export default DetailedQueryPage;
