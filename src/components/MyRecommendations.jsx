import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  //console.log(recommendations);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/recommendations?email=${user.email}`)
      .then((res) => setRecommendations(res.data))
      .catch((err) => toast.error(err));
  }, [user.email]);

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
    return <p>You have no recommendations yet.</p>;
  }
  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Your Recommendations</h2>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Queried Product</th>
            <th>Recommended Product</th>
            <th>Recommendation Title</th>
            <th>Recommendation Reason</th>
            <th>Created On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((rec) => (
            <tr key={rec._id}>
              <td>{rec.itemName}</td>
              <td>{rec.recommendationItemname}</td>
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
    </div>
  );
};

export default MyRecommendations;
