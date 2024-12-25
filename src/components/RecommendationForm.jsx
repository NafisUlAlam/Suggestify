import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const RecommendationForm = ({
  query,
  setRecommendations,
  recommendations,
  currentQuery,
  setCurrentQuery,
}) => {
  const { user } = useContext(AuthContext);
  const {
    itemName,
    queryTitle,
    originalPoster,
    originalPosterEmail,
    _id,
    photo,
    originalPosterImg,
  } = query;
  const handleAddRecommendation = (e) => {
    e.preventDefault();
    //console.log(user.photoURL);
    const recommendationItemname = e.target.recommendationItemname.value;
    const recommendationItembrand = e.target.recommendationItembrand.value;
    const recommendationItemPhoto = e.target.recommendationItemPhoto.value;
    const recommendationTitle = e.target.recommendationTitle.value;
    const recommendationReasons = e.target.recommendationReasons.value;

    const recommendationPoster = e.target.user.value;
    const recommendationPosterEmail = e.target.email.value;
    const recommendationPosterImg = user.photoURL;

    const timeOfPost = new Date().toISOString();
    const myRecommendation = {
      recommendationItemname,
      recommendationItembrand,
      recommendationItemPhoto,
      recommendationTitle,
      recommendationReasons,

      recommendationPoster,
      recommendationPosterEmail,
      recommendationPosterImg,
      timeOfPost,
      itemName,
      queryTitle,
      originalPoster,
      originalPosterEmail,
      originalPosterImg,
      photo,
      query_id: _id,
    };
    //console.log(myRecommendation);
    e.target.reset();
    fetch("http://localhost:5000/recommendations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myRecommendation),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.insertedId) {
          console.log(data.insertedId);
          toast.success("Successfully added the Recommendation!", {
            position: "top-center",
          });
          myRecommendation._id = data.insertedId;
          //console.log(currentQuery);
          const newArray = [myRecommendation, ...recommendations];
          setRecommendations(newArray);
          const newQuery = {
            ...currentQuery,
            recommendationCount: currentQuery.recommendationCount + 1,
          };
          setCurrentQuery(newQuery);
        }
      })
      .catch((err) => toast.error(err, { position: "top-center" }));
  };
  return (
    <div className="card  w-full shrink-0 border-2 md:p-8 lg:w-[50%] mx-auto">
      <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center pt-4">
        Recommendation Form
      </h2>
      <hr className="mt-4 text-black" />
      <form
        className="card-body grid grid-cols-1 md:grid-cols-2"
        onSubmit={(e) => handleAddRecommendation(e)}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="recommended item name"
            name="recommendationItemname"
            className="input input-bordered bg-blue-50"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input
            type="text"
            placeholder="recommended brand"
            name="recommendationItembrand"
            className="input input-bordered bg-blue-50"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="text"
            placeholder="item photo URL"
            name="recommendationItemPhoto"
            className="input input-bordered bg-blue-50"
            required
          />
        </div>

        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="recommendation title"
            name="recommendationTitle"
            className="input input-bordered bg-blue-50"
            required
          />
        </div>

        <div className="form-control relative md:col-span-2">
          <label className="label">
            <span className="label-text">Recommendation Reasons</span>
          </label>
          <textarea
            placeholder="tell us why you recommend the product"
            type="text"
            name="recommendationReasons"
            className="textarea textarea-bordered bg-blue-50 p-4"
            rows={10}
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="text"
            name="user"
            className="input input-bordered bg-blue-50"
            value={user.displayName}
            required
            readOnly
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input
            type="text"
            name="email"
            className="input input-bordered bg-blue-50"
            value={user.email}
            readOnly
            required
          />
        </div>
        <button className="btn btn-accent md:col-span-2 my-8">Recommend</button>
      </form>
    </div>
  );
};

RecommendationForm.propTypes = {
  query: PropTypes.object,
  recommendations: PropTypes.array,
  setRecommendations: PropTypes.func,
  currentQuery: PropTypes.object,
  setCurrentQuery: PropTypes.func,
};
export default RecommendationForm;
