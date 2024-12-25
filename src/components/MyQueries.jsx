import { useContext, useEffect, useState } from "react";
import QueryBanner from "./QueryBanner";

import { AuthContext } from "../contexts/AuthContext";
import MyQueryCard from "./MyQueryCard";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import TitleAndSubTitle from "./TitleAndSubTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Nothing from "./Nothing";
import { useNavigate } from "react-router-dom";

const MyQueries = () => {
  useDocumentTitle("My Queries|Suggestify");
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);
  const navigate = useNavigate();

  const axiosInstance = useAxiosSecure();
  //console.log(axiosInstance);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/queries?email=${user.email}`)
  //     .then((res) => setQueries(res.data))
  //     .catch((err) => toast.error(err));
  // }, [user.email]);

  useEffect(() => {
    axiosInstance
      .get(`/userqueries/?email=${user.email}`)
      .then((res) => setQueries(res.data))
      .catch((err) => toast.error(err));
  }, [axiosInstance, user.email]);
  //console.log(queries);
  return (
    <div>
      {/* query banner which navigates to addquery page*/}
      <QueryBanner></QueryBanner>
      {/* query section which we get from database*/}
      <TitleAndSubTitle
        title={"Your Queries, Our Recommendations"}
        subtitle={`Discover tailored suggestions for every query you post and explore
          thoughtful recommendations from others. Empower your decisions with a
          community-driven platform designed for clarity and collaboration.`}
      ></TitleAndSubTitle>

      <div
        className={`${
          queries.length > 0
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            : "grid grid-cols-1 place-items-center"
        }`}
      >
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
          <div className="text-center">
            <Nothing title={`You Don't Have Any Query Posted`}></Nothing>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/addqueries");
              }}
            >
              Ask Away
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyQueries;
