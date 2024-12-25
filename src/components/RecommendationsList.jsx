import PropTypes from "prop-types";
import TitleAndSubTitle from "./TitleAndSubTitle";
import { Fade, Slide } from "react-awesome-reveal";

const RecommendationsList = ({ recommendations }) => {
  return (
    <div className="my-6">
      <Fade>
        <TitleAndSubTitle
          title={`Recommendations for this Query`}
          subtitle={`Explore personalized suggestions for the product inquired about. Get insights from the community and discover the best options to make an informed choice.`}
        ></TitleAndSubTitle>
        {recommendations.length === 0 && (
          <p className="text-center font-semibold">No recommendations yet.</p>
        )}
      </Fade>

      <ul className="space-y-4">
        {recommendations.map((rec, index) => (
          <Slide key={rec._id} direction="right" delay={100 * (index + 1)}>
            <li className="bg-base-200 p-4 rounded-lg shadow ">
              <div className="flex items-center space-x-4">
                <div>
                  <img
                    src={rec.recommendationPosterImg}
                    alt={rec.recommendationPoster}
                    className="w-16 h-16 rounded-full"
                  />
                  <p className="font-medium text-center ">
                    {rec.recommendationPoster}
                  </p>
                </div>

                <div className="flex-grow">
                  <div className="flex justify-center flex-col items-center">
                    <h4 className="text-lg font-semibold text-primary">
                      {rec.recommendationTitle}
                    </h4>
                    <p className="">
                      Recommended Product:{" "}
                      <span className="font-medium ">
                        {rec.recommendationItemname}
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
                <div className="text-right flex-0 ">
                  <div className="flex justify-end">
                    <img
                      src={rec.recommendationItemPhoto}
                      alt={rec.recommendationItemname}
                      className="w-16 h-16"
                    />
                  </div>
                </div>
              </div>
            </li>
          </Slide>
        ))}
      </ul>
    </div>
  );
};
RecommendationsList.propTypes = {
  recommendations: PropTypes.array,
  setRecommendations: PropTypes.func,
};

export default RecommendationsList;
