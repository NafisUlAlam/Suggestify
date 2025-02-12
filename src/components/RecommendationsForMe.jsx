import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import TitleAndSubTitle from "./TitleAndSubTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { Fade } from "react-awesome-reveal";
import Nothing from "./Nothing";
import PageLoading from "./PageLoading";

const RecommendationsForMe = () => {
  useDocumentTitle("Recommendations For Me|Suggestify");
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxiosSecure();
  //console.log(recommendations);
  // useEffect(() => {
  //   axios
  //     .get(`https://assignment-11-server-theta-mocha.vercel.app/recommendationsforme?email=${user.email}`)
  //     .then((res) => setRecommendations(res.data))
  //     .catch((err) => toast.error(err));
  // }, [user.email]);
  useEffect(() => {
    axiosInstance
      .get(`recommendationsforme?email=${user.email}`)
      .then((res) => {
        setRecommendations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err);
        setLoading(false);
      });
  }, [user.email, axiosInstance]);
  //console.log(recommendations);

  return (
    <div className="">
      <Fade>
        <TitleAndSubTitle
          title={`Recommendations For Your Queries`}
          subtitle={`Take a look at what others responded to your questions!`}
        ></TitleAndSubTitle>
      </Fade>

      {loading ? (
        <PageLoading></PageLoading>
      ) : recommendations.length > 0 ? (
        <div className="overflow-x-auto min-h-screen p-4 lg:p-10">
          <table className="table w-full ">
            <thead>
              <tr className="text-center text-text/60  bg-primary/10 lg:p-10 rounded-lg border-primary dark:border-primary/10">
                <th>Query Title</th>
                <th>Queried Item</th>
                <th>Recommended Product</th>
                <th>Recommendation Reason</th>
                <th>Recommender</th>

                <th>Recommended On</th>
              </tr>
            </thead>
            <tbody className="text-center text-text  bg-primary/10 lg:p-10 rounded-lg ">
              {recommendations.map((rec) => (
                <tr
                  key={rec._id}
                  className="border-primary dark:border-primary/10"
                >
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
                      <h2 className="text-center">
                        {rec.recommendationPoster}
                      </h2>
                    </div>
                  </td>

                  <td>{new Date(rec.timeOfPost).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Nothing title={`There are no recommendations for you`}></Nothing>
      )}
    </div>
  );
};

export default RecommendationsForMe;
