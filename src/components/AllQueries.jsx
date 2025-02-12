import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import QueryCard from "./QueryCard";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { Fade } from "react-awesome-reveal";
import TitleAndSubTitle from "./TitleAndSubTitle";
import Nothing from "./Nothing";
import PageLoading from "./PageLoading";

const AllQueries = () => {
  useDocumentTitle("All Queries|Suggestify");
  const [queries, setQueries] = useState([]);
  const [filteredQueries, setFilteredQueries] = useState([]);
  const [grid, setGrid] = useState("grid-cols-1");
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    axios
      .get("https://assignment-11-server-theta-mocha.vercel.app/queries")
      .then((res) => {
        setQueries(res.data);
        setFilteredQueries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);
    //console.log(text.length);
    const filtered = queries.filter((query) =>
      query.itemName.toLowerCase().includes(text)
    );
    setFilteredQueries(filtered);
  };

  const handleGridLayout = (columns) => {
    if (columns === 1) setGrid(`grid-cols-1`);
    if (columns === 2) setGrid(`grid-cols-2`);
    if (columns === 3) setGrid("grid-cols-3");
  };
  //console.log(filteredQueries);
  // console.log(grid);
  if (loading) return <PageLoading></PageLoading>;
  return (
    <div>
      <Fade>
        <TitleAndSubTitle
          title={`Help Others With Your Valuable Insights`}
          subtitle={`Discover a diverse range of product queries from our community. Join the conversation by sharing recommendations or insights for the products you care about.`}
        ></TitleAndSubTitle>
      </Fade>
      <div className="my-4 flex justify-between items-center flex-wrap">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search by product name..."
          className="input input-bordered w-full max-w-md bg-primary/20 text-text"
        />
        <div className="flex gap-2 ml-4">
          <button
            className="btn bg-primary hover:bg-primary/20 text-text border-0"
            onClick={() => handleGridLayout(1)}
          >
            1 Column
          </button>
          <button
            className="btn  bg-primary hover:bg-primary/20 text-text border-0"
            onClick={() => handleGridLayout(2)}
          >
            2 Columns
          </button>
          <button
            className="btn  bg-primary hover:bg-primary/20 text-text border-0"
            onClick={() => handleGridLayout(3)}
          >
            3 Columns
          </button>
        </div>
      </div>
      <div
        className={`${
          filteredQueries.length > 0
            ? `grid ${grid} gap-4`
            : "grid place-items-center"
        }  `}
      >
        {filteredQueries.length > 0 ? (
          filteredQueries.map((query) => (
            <QueryCard key={query._id} query={query}></QueryCard>
          ))
        ) : (
          <Nothing title={`Sorry No Such Products For ${searchText}`}></Nothing>
        )}
      </div>
    </div>
  );
};

export default AllQueries;
