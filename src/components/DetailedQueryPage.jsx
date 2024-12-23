import DetailedQueryCard from "./DetailedQueryCard";
import { useLoaderData } from "react-router-dom";
import RecommendationForm from "./RecommendationForm";

const DetailedQueryPage = () => {
  const query = useLoaderData();
  return (
    <div>
      <DetailedQueryCard query={query}></DetailedQueryCard>
      {/* recommendation form */}
      <RecommendationForm query={query}></RecommendationForm>
    </div>
  );
};

export default DetailedQueryPage;
