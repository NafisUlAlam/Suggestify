import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";
import { Fade } from "react-awesome-reveal";
const QueryCard = ({ query }) => {
  const {
    itemName,
    itemBrand,
    photo,
    queryTitle,
    boycottReasons,
    originalPoster,
    recommendationCount,
    originalPosterImg,
    timeOfPost,
    _id,
  } = query;
  const result = formatDistance(new Date(), timeOfPost);
  return (
    <Fade>
      <div className="card w-full bg-base-100 shadow-md border justify-between">
        <div className="flex items-center p-4">
          <img
            src={originalPosterImg}
            alt="Poster"
            className="w-12 h-12 rounded-full border mr-4"
          />
          <div>
            <h2 className="font-semibold text-lg ">{originalPoster}</h2>
            <p className="text-sm ">Posted {result} ago</p>
          </div>
        </div>

        <div className="p-4">
          <div className="grid place-items-center">
            <img
              src={photo}
              alt="Product"
              className="rounded-lg mb-4 h-[200px] object-contain"
            />
          </div>
          <h3 className="font-bold text-xl  mb-2">{queryTitle}</h3>
          <h3 className="font-semibold text-xl  mb-2">Product: {itemName}</h3>
          <p className="text-sm  mb-2">
            <strong>Brand:</strong> {itemBrand}
          </p>
          <p className="text-sm  mb-4">
            <strong>Reason for Boycott:</strong> {boycottReasons}
          </p>
        </div>

        <div className="card-actions justify-between items-center p-4 border-t">
          <span className="badge badge-outline badge-primary">
            Recommendations: {recommendationCount}
          </span>
          <Link to={`/detailquery/${_id}`}>
            <button className="btn btn-primary btn-sm">Recommend</button>
          </Link>
        </div>
      </div>
    </Fade>
  );
};

QueryCard.propTypes = {
  query: PropTypes.object,
};
export default QueryCard;
