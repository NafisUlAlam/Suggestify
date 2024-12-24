import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import TitleAndSubTitle from "./TitleAndSubTitle";

const RecommendationsForMe = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  const axiosInstance = useAxiosSecure();
  //console.log(recommendations);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/recommendationsforme?email=${user.email}`)
  //     .then((res) => setRecommendations(res.data))
  //     .catch((err) => toast.error(err));
  // }, [user.email]);
  useEffect(() => {
    axiosInstance
      .get(`recommendationsforme?email=${user.email}`)
      .then((res) => setRecommendations(res.data))
      .catch((err) => toast.error(err));
  }, [user.email, axiosInstance]);
  //console.log(recommendations);
  if (recommendations.length === 0) {
    return <p>No recommendations for your queries yet.</p>;
  }

  return (
    <div className="overflow-x-auto min-h-screen">
      <TitleAndSubTitle
        title={`Recommendations For Your Queries`}
        subtitle={`Take a look at what others responded to your questions!`}
      ></TitleAndSubTitle>

      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Query Title</th>
            <th>Recommended Product</th>
            <th>Recommendation Reason</th>
            <th>Recommender</th>
            <th>Recommender Email</th>
            <th>Recommended On</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((rec) => (
            <tr key={rec._id}>
              <td>{rec.queryTitle}</td>
              <td>{rec.recommendationItemname}</td>
              <td>{rec.recommendationReasons}</td>
              <td>{rec.recommendationPoster}</td>
              <td>{rec.recommendationPosterEmail}</td>
              <td>{new Date(rec.timeOfPost).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecommendationsForMe;
