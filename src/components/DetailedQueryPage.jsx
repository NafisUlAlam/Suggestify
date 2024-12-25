import DetailedQueryCard from "./DetailedQueryCard";
import { useLoaderData } from "react-router-dom";
import RecommendationForm from "./RecommendationForm";
import RecommendationsList from "./RecommendationsList";
import TitleAndSubTitle from "./TitleAndSubTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import { Fade } from "react-awesome-reveal";

const DetailedQueryPage = () => {
  const query = useLoaderData();
  useDocumentTitle("Query Detail|Suggestify");
  const [currentQuery, setCurrentQuery] = useState(query);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch recommendations for the given queryId
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(
          `https://assignment-11-server-theta-mocha.vercel.app/recommendations?queryId=${currentQuery._id}`
        );
        setRecommendations(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [currentQuery._id]);

  return (
    <div>
      <Fade triggerOnce>
        <TitleAndSubTitle
          title={`Query Details & Recommendations`}
          subtitle={`Learn more about the product you're interested in and share your thoughts through a recommendation. View valuable insights and suggestions from others to help guide your decision.`}
        ></TitleAndSubTitle>
      </Fade>
      <Fade delay={500} triggerOnce>
        <DetailedQueryCard query={currentQuery}></DetailedQueryCard>
      </Fade>
      {/* recommendation form */}
      <Fade delay={1000} triggerOnce>
        <RecommendationForm
          query={query}
          setRecommendations={setRecommendations}
          recommendations={recommendations}
          currentQuery={currentQuery}
          setCurrentQuery={setCurrentQuery}
        ></RecommendationForm>
      </Fade>

      {/* recommendations */}
      {loading && (
        <p className="text-center text-neutral">Loading recommendations...</p>
      )}

      <RecommendationsList
        recommendations={recommendations}
        setRecommendations={setRecommendations}
      ></RecommendationsList>
    </div>
  );
};

export default DetailedQueryPage;
