import { format } from "date-fns";
import PropTypes from "prop-types";
const DetailedQueryCard = ({ query }) => {
  const {
    itemName,
    itemBrand,
    photo,
    queryTitle,
    boycottReasons,
    originalPoster,
    originalPosterEmail,
    recommendationCount,
    originalPosterImg,
    timeOfPost,
  } = query;

  const relativeTime = format(
    new Date(timeOfPost),
    "MMMM dd, yyyy 'at' h:mmaaa"
  );
  return (
    <div className="card bg-base-100 shadow-md rounded-lg px-4 py-8 mb-6  mx-auto lg:w-[50%]">
      {/* Header: Poster Info and Time */}
      <div className="flex items-center mb-4">
        {/* User Image */}
        <img
          src={originalPosterImg}
          alt={originalPoster}
          className="w-16 h-16 rounded-full object-cover mr-3"
        />
        {/* Poster Info */}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-primary">
            {originalPoster}
          </h3>
          <p className="text-sm text-primary/80">
            {originalPosterEmail.split("@")[0]}
          </p>
          {/* Time of Post */}
          <p className="text-xs text-gray-400">{relativeTime}</p>
        </div>
      </div>

      {/* Item Photo and Details */}
      <div className="flex items-center justify-center mb-4">
        <img
          src={photo}
          alt={itemName}
          className="max-h-[300px] rounded-md object-cover mr-4"
        />
      </div>
      <div className="flex gap-4 items-center my-2">
        <h2 className="text-md font-thin ">{itemName}</h2>
        <p className="text-sm font-thin badge badge-ghost">{itemBrand}</p>
      </div>

      {/* Query Title */}
      <h4 className="text-md md:text-lg lg:text-xl font-bold my-4">
        {queryTitle}
      </h4>

      {/* Boycott Reasons */}
      {boycottReasons && (
        <div className="mb-4">
          <p className="text-base text-base-content">{boycottReasons}</p>
        </div>
      )}

      {/* Recommendation and Actions */}
      <div className="flex items-center justify-between">
        <p className="text-sm  badge badge-accent">
          {recommendationCount} Recommendations
        </p>
      </div>
    </div>
  );
};
DetailedQueryCard.propTypes = {
  query: PropTypes.object,
};
export default DetailedQueryCard;
