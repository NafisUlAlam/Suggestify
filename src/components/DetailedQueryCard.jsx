import { formatDistanceToNow } from "date-fns";
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
    _id,
  } = query;

  const relativeTime = formatDistanceToNow(new Date(timeOfPost), {
    addSuffix: true, // Adds "ago"
  });
  return (
    <div className="card bg-base-100 shadow-md rounded-lg p-4 mb-6  mx-auto">
      {/* Header: Poster Info and Time */}
      <div className="flex items-center mb-4">
        {/* User Image */}
        <img
          src={originalPosterImg}
          alt={originalPoster}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        {/* Poster Info */}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-primary">
            {originalPoster}
          </h3>
          <p className="text-sm text-primary/80">{originalPosterEmail}</p>
        </div>
        {/* Time of Post */}
        <p className="text-xs text-gray-400">{relativeTime}</p>
      </div>

      {/* Item Photo and Details */}
      <div className="flex items-start mb-4">
        <img
          src={photo}
          alt={itemName}
          className="w-20 h-20 rounded-md object-cover mr-4"
        />
        <div>
          <h2 className="text-xl font-bold ">{itemName}</h2>
          <p className="text-sm text-inherit font-thin">Brand: {itemBrand}</p>
        </div>
      </div>

      {/* Query Title */}
      <h4 className="text-lg font-semibold mb-2">{queryTitle}</h4>

      {/* Boycott Reasons */}
      {boycottReasons && (
        <div className="mb-4">
          <p className="text-sm opacity-70 mb-2">Boycott Reasons:</p>
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
