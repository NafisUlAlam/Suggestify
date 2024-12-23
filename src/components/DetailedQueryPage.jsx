import DetailedQueryCard from "./DetailedQueryCard";
import { useLoaderData } from "react-router-dom";
import RecommendationForm from "./RecommendationForm";
import RecommendationsList from "./RecommendationsList";

const DetailedQueryPage = () => {
  const query = useLoaderData();

  return (
    <div>
      <DetailedQueryCard query={query}></DetailedQueryCard>
      {/* recommendation form */}
      <RecommendationForm query={query}></RecommendationForm>
      <RecommendationsList queryId={query._id}></RecommendationsList>
    </div>
  );
};

export default DetailedQueryPage;
