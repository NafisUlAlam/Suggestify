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
        fetch(
          `https://assignment-11-server-theta-mocha.vercel.app/queries/${_id}`,
          {
            method: "DELETE",
          }
        )
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
    <Slide className="grid  grid-rows-subgrid row-span-8 gap-2">
      <div className="card bg-primary/10  shadow-xl h-full grid grid-rows-subgrid row-span-8 ">
        <figure className="px-10 pt-10 ">
          <img
            src={photo}
            alt={itemName}
            className="rounded-xl h-[200px] object-contain"
          />
        </figure>
        <div className="space-y-4 px-8 grid grid-rows-subgrid row-span-5">
          <div className="flex items-center gap-2">
            <img
              src={originalPosterImg}
              className="size-8 rounded-full"
              alt=""
            />
            <div>
              <p className="font-semibold">{originalPoster}</p>
              <p className="font-semibold opacity-60">
                {originalPosterEmail.split("@")[0]}
              </p>
            </div>
            <div className="flex-1 text-right opacity-60">
              <p className=" rounded-full">{result} ago</p>
            </div>
          </div>
          <h2 className=" text-center font-bold md:text-xl">{queryTitle}</h2>

          <p className="font-light my-4">{itemName}</p>
          <p className="font-thin badge bg-primary text-text border-0">
            {itemBrand}
          </p>

          <p className="my-4">{boycottReasons.slice(0, 30)}...</p>
          <p
            className={`outline rounded-full text-center ${
              recommendationCount > 0
                ? "bg-green-50 text-green-400"
                : "bg-red-50 text-red-400"
            }`}
          >
            Recommendations: {recommendationCount}
          </p>
        </div>
        <div className="card-actions pb-8 justify-center mt-6 text-text border-0">
          <Link to={`/detailquery/${_id}`}>
            <button className="btn bg-accent hover:bg-accent/20 text-text border-0">
              Details
            </button>
          </Link>
          <Link to={`/updatequery/${_id}`}>
            <button className="btn bg-primary hover:bg-primary/20 text-text border-0">
              Update
            </button>
          </Link>
          <button
            className="btn bg-red-400 hover:bg-red-200 text-text border-0"
            onClick={() => handleDelete(_id)}
          >
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
