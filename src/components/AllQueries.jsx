import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import QueryCard from "./QueryCard";
import useDocumentTitle from "../hooks/useDocumentTitle";

const AllQueries = () => {
  useDocumentTitle("All Queries|Suggestify");
  const [queries, setQueries] = useState([]);
  const [filteredQueries, setFilteredQueries] = useState([]);
  const [grid, setGrid] = useState("grid-cols-1");
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/queries")
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
    console.log(text.length);
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
  if (loading) return <span className="loading loading-bars loading-lg"></span>;
  return (
    <div>
      <div className="my-4 flex justify-between items-center flex-wrap">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search by product name..."
          className="input input-bordered w-full max-w-md"
        />
        <div className="flex gap-2 ml-4">
          <button
            className="btn btn-outline"
            onClick={() => handleGridLayout(1)}
          >
            1 Column
          </button>
          <button
            className="btn btn-outline"
            onClick={() => handleGridLayout(2)}
          >
            2 Columns
          </button>
          <button
            className="btn btn-outline"
            onClick={() => handleGridLayout(3)}
          >
            3 Columns
          </button>
        </div>
      </div>
      <div className={`grid ${grid} gap-4 `}>
        {filteredQueries.map((query) => (
          <QueryCard key={query._id} query={query}></QueryCard>
        ))}
      </div>
    </div>
  );
};

export default AllQueries;
