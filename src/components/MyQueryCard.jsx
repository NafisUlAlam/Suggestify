import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Slide } from "react-awesome-reveal";
import { formatDistance } from "date-fns";

const MyQueryCard = ({ query, queries, setQueries }) => {
  const {
    _id,
    boycottReasons,
    itemBrand,
    itemName,
    originalPoster,
    originalPosterEmail,
    originalPosterImg,
    photo,
    queryTitle,
    recommendationCount,
    timeOfPost,
  } = query;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/queries/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const newArr = queries.filter(
                (equipment) => equipment._id !== _id
              );
              setQueries(newArr);
            }
          })
          .catch((err) => toast.error(err, { position: "top-center" }));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const result = formatDistance(new Date(), timeOfPost);
  return (
    <Slide>
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10 h-[200px]">
          <img
            src={photo}
            alt={itemName}
            className="rounded-xl h-[200px] object-contain"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-2">
            <img
              src={originalPosterImg}
              className="size-8 rounded-full"
              alt=""
            />
            <div>
              <p className="font-semibold">{originalPoster}</p>
              <p className="font-semibold opacity-60">{originalPosterEmail}</p>
            </div>
            <div className="flex-1 text-right opacity-60">
              <p className=" rounded-full">{result} ago</p>
            </div>
          </div>
          <h2 className=" text-center font-bold md:text-xl">{queryTitle}</h2>
          <div className="flex justify-between">
            <p className="font-bold">{itemName}</p>
            <p className="font-semibold">{itemBrand}</p>
          </div>

          <p className=" rounded-full">{boycottReasons.slice(0, 30)}...</p>
          <p>Recommendations: {recommendationCount}</p>
        </div>
        <div className="card-actions pb-8 justify-center">
          <Link to={`/detailquery/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
          <Link to={`/updatequery/${_id}`}>
            <button className="btn btn-primary">Update</button>
          </Link>
          <button className="btn btn-primary" onClick={() => handleDelete(_id)}>
            Delete
          </button>
        </div>
      </div>
    </Slide>
  );
};

MyQueryCard.propTypes = {
  query: PropTypes.object,
  queries: PropTypes.array,
  setQueries: PropTypes.func,
};
export default MyQueryCard;
