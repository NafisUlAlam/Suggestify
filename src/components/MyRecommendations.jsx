import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import TitleAndSubTitle from "./TitleAndSubTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { Fade } from "react-awesome-reveal";
import Nothing from "./Nothing";

const MyRecommendations = () => {
  useDocumentTitle("My Recommendations|Suggestify");
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  //console.log(recommendations);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/recommendations?email=${user.email}`)
  //     .then((res) => setRecommendations(res.data))
  //     .catch((err) => toast.error(err));
  // }, [user.email]);

  const axiosInstance = useAxiosSecure();
  useEffect(() => {
    axiosInstance
      .get(`/myrecommendations?email=${user.email}`)
      .then((res) => setRecommendations(res.data))
      .catch((err) => toast.error(err));
  }, [user.email, axiosInstance]);
  const handleDeleteRecommendation = (_id, query_id) => {
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
        fetch(`http://localhost:5000/recommendations/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const newArr = recommendations.filter(
                (equipment) => equipment._id !== _id
              );
              setRecommendations(newArr);
            }
          })
          .catch((err) => toast.error(err, { position: "top-center" }));
        axios.patch(`http://localhost:5000/queries/${query_id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  if (recommendations.length === 0) {
    return (
      <Nothing title={`You Haven't Made Any Recommendations Yet`}></Nothing>
    );
  }
  console.log(recommendations);
  return (
    <div className="overflow-x-auto">
      <Fade>
        <TitleAndSubTitle
          title={`Your Recommendations at a Glance`}
          subtitle={`View all the recommendations you've made to help others make informed choices. Manage and delete your contributions, all in one place, for a seamless experience.`}
        ></TitleAndSubTitle>
      </Fade>
      <Fade delay={500}>
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Queried Product</th>
              <th>Recommended Product</th>
              <th>Recommendation Title</th>
              <th>Recommendation Reason</th>
              <th>Created On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {recommendations.map((rec) => (
              <tr key={rec._id}>
                <td>
                  <img
                    src={rec.originalPosterImg}
                    className="size-8 rounded-full"
                    alt=""
                  />
                </td>
                <td>
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={rec.photo}
                      className="size-16 object-scale-down"
                      alt=""
                    />
                    <h2>{rec.itemName}</h2>
                  </div>
                </td>
                <td>
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={rec.recommendationItemPhoto}
                      className="size-16 object-scale-down"
                      alt=""
                    />
                    <h2>{rec.recommendationItemname}</h2>
                  </div>
                </td>
                <td>{rec.recommendationTitle}</td>
                <td>{rec.recommendationReasons}</td>
                <td>{new Date(rec.timeOfPost).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-accent"
                    onClick={() =>
                      handleDeleteRecommendation(rec._id, rec.query_id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fade>
    </div>
  );
};

export default MyRecommendations;
