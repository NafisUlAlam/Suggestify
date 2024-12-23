import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import QueryCard from "./QueryCard";

const AllQueries = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/queries")
      .then((res) => {
        setQueries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err);
        setLoading(false);
      });
  }, []);
  if (loading) return <span className="loading loading-bars loading-lg"></span>;
  if (queries.length === 0) return <p>Nothing to show</p>;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {queries.map((query) => (
          <QueryCard key={query._id} query={query}></QueryCard>
        ))}
      </div>
    </div>
  );
};

export default AllQueries;
