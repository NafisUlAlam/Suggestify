import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import TitleAndSubTitle from "./TitleAndSubTitle";

const RecommendationsList = ({ queryId }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch recommendations for the given queryId
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/recommendations?queryId=${queryId}`
        );
        setRecommendations(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [queryId]);

  if (loading) {
    return (
      <p className="text-center text-neutral">Loading recommendations...</p>
    );
  }

  if (recommendations.length === 0) {
    return <p className="text-center text-neutral">No recommendations yet.</p>;
  }

  return (
    <div className="my-6">
      <TitleAndSubTitle
        title={`Recommendations for Your Query`}
        subtitle={`Explore personalized suggestions for the product you've inquired about. Get insights from the community and discover the best options to make an informed choice.`}
      ></TitleAndSubTitle>
      <ul className="space-y-4">
        {recommendations.map((rec) => (
          <li key={rec._id} className="bg-base-200 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <img
                src={rec.recommendationItemPhoto}
                alt={rec.recommendationItemname}
                className="w-16 h-16 rounded"
              />
              <div>
                <h4 className="text-lg font-semibold text-primary">
                  {rec.recommendationTitle}
                </h4>
                <p className="">
                  Recommended Product:{" "}
                  <span className="font-medium text-accent">
                    {rec.recommendationItemname}
                  </span>
                </p>
                <p className="">
                  Recommended by:{" "}
                  <span className="font-medium ">
                    {rec.recommendationPoster} ({rec.recommendationPosterEmail})
                  </span>
                </p>
                <p className="text-sm ">
                  <span className="font-medium">Reason:</span>{" "}
                  {rec.recommendationReasons}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(rec.timeOfPost).toLocaleString()}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
RecommendationsList.propTypes = {
  queryId: PropTypes.string,
};

export default RecommendationsList;
