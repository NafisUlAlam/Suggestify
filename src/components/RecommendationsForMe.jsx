import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import TitleAndSubTitle from "./TitleAndSubTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { Fade } from "react-awesome-reveal";
import Nothing from "./Nothing";

const RecommendationsForMe = () => {
  useDocumentTitle("Recommendations For Me|Suggestify");
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
  console.log(recommendations);
  if (recommendations.length === 0) {
    return <Nothing title={`No recommendations for you`}></Nothing>;
  }

  return (
    <div className="overflow-x-auto min-h-screen">
      <Fade>
        <TitleAndSubTitle
          title={`Recommendations For Your Queries`}
          subtitle={`Take a look at what others responded to your questions!`}
        ></TitleAndSubTitle>
      </Fade>
      <Fade delay={500}>
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th>Query Title</th>
              <th>Queried Item</th>
              <th>Recommended Product</th>
              <th>Recommendation Reason</th>
              <th>Recommender</th>

              <th>Recommended On</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {recommendations.map((rec) => (
              <tr key={rec._id}>
                <td>{rec.queryTitle}</td>
                <td>
                  <div className="flex flex-col items-center">
                    <img
                      src={rec.photo}
                      className="size-16 object-scale-down"
                      alt=""
                    />
                    <h2 className="text-center">{rec.itemName}</h2>
                  </div>
                </td>
                <td>
                  <div className="flex flex-col items-center">
                    <img
                      src={rec.recommendationItemPhoto}
                      className="size-16 object-scale-down"
                      alt=""
                    />
                    <h2 className="text-center">
                      {rec.recommendationItemname}
                    </h2>
                  </div>
                </td>
                <td>{rec.recommendationReasons}</td>
                <td>
                  <div className="flex flex-col items-center">
                    <img
                      src={rec.recommendationPosterImg}
                      className="size-8 rounded-full"
                      alt=""
                    />
                    <h2 className="text-center">{rec.recommendationPoster}</h2>
                  </div>
                </td>

                <td>{new Date(rec.timeOfPost).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fade>
    </div>
  );
};

export default RecommendationsForMe;
