import { Slide } from "react-awesome-reveal";
import QueryCard from "./QueryCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ShowLatestCards = () => {
  const [queries, setQueries] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://assignment-11-server-theta-mocha.vercel.app/queries")
      .then((res) => {
        setQueries(res.data.slice(0, 6));

        setLoading(false);
      })
      .catch((err) => {
        toast.error(err);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center my-4">
        Discover the Latest{" "}
        <span className="text-primary">Product Queries</span>
      </h2>
      <p className="font-extralight text-base md:text-xl text-center my-4">
        Stay updated with the newest questions from our community seeking
        recommendations for various products. Explore their needs, share your
        insights, and help others make informed decisions while uncovering
        alternatives for your own queries.{" "}
      </p>
      {loading && <p>Loading</p>}
      <Slide>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {queries.map((query) => (
            <QueryCard key={query._id} query={query}></QueryCard>
          ))}
        </div>
      </Slide>
    </div>
  );
};

export default ShowLatestCards;
