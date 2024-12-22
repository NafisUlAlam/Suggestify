import { useContext, useEffect, useState } from "react";
import QueryBanner from "./QueryBanner";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import MyQueryCard from "./MyQueryCard";
import { toast } from "react-toastify";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/queries?email=${user.email}`)
      .then((res) => setQueries(res.data))
      .catch((err) => toast.error(err));
  }, [user.email]);
  return (
    <div>
      {/* query banner which navigates to addquery page*/}
      <QueryBanner></QueryBanner>
      {/* query section which we get from database*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {queries.length > 0 ? (
          queries.map((query) => (
            <MyQueryCard
              key={query._id}
              query={query}
              queries={queries}
              setQueries={setQueries}
            ></MyQueryCard>
          ))
        ) : (
          <p>Nothing to show</p>
        )}
      </div>
    </div>
  );
};

export default MyQueries;
