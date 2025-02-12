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
import PageLoading from "./PageLoading";

const MyRecommendations = () => {
  useDocumentTitle("My Recommendations|Suggestify");
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  //console.log(recommendations);
  // useEffect(() => {
  //   axios
  //     .get(`https://assignment-11-server-theta-mocha.vercel.app/recommendations?email=${user.email}`)
  //     .then((res) => setRecommendations(res.data))
  //     .catch((err) => toast.error(err));
  // }, [user.email]);

  const axiosInstance = useAxiosSecure();
  useEffect(() => {
    axiosInstance
      .get(`/myrecommendations?email=${user.email}`)
      .then((res) => {
        setRecommendations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err);
        setLoading(false);
      });
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
        fetch(
          `https://assignment-11-server-theta-mocha.vercel.app/recommendations/${_id}`,
          {
            method: "DELETE",
          }
        )
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
        axios.patch(
          `https://assignment-11-server-theta-mocha.vercel.app/queries/${query_id}`
        );
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <Fade>
        <TitleAndSubTitle
          title={`Your Recommendations at a Glance`}
          subtitle={`View all the recommendations you've made to help others make informed choices. Manage and delete your contributions, all in one place, for a seamless experience.`}
        ></TitleAndSubTitle>
      </Fade>

      {loading ? (
        <PageLoading></PageLoading>
      ) : (
        <div className="overflow-x-auto min-h-screen p-4 lg:p-10">
          {recommendations.length > 0 ? (
            <table className="table  w-full">
              <thead>
                <tr className="text-center text-text text-text/60  bg-primary/10 lg:p-10 rounded-lg border-primary dark:border-primary/10">
                  <th>Inquirer</th>
                  <th>Queried Product</th>
                  <th>Recommended Product</th>
                  <th>Recommendation Title</th>
                  <th>Recommendation Reason</th>
                  <th>Created On</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-center text-text  bg-primary/10 lg:p-10 rounded-lg ">
                {recommendations.map((rec) => (
                  <tr
                    key={rec._id}
                    className="border-primary dark:border-primary/50"
                  >
                    <td>
                      <div className="flex flex-col items-center">
                        <img
                          src={rec.originalPosterImg}
                          className="size-8 rounded-full"
                          alt=""
                        />
                        <h2 className="text-center">{rec.originalPoster}</h2>
                      </div>
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
                        className="btn bg-red-500  text-white/90 hover:bg-red-600 border-0 "
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
          ) : (
            <Nothing
              title={`You Haven't Made Any Recommendations Yet`}
            ></Nothing>
          )}
        </div>
      )}
    </div>
  );
};

export default MyRecommendations;
