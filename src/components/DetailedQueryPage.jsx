import DetailedQueryCard from "./DetailedQueryCard";
import { useLoaderData } from "react-router-dom";

const DetailedQueryPage = () => {
  const query = useLoaderData();
  return (
    <div>
      <DetailedQueryCard query={query}></DetailedQueryCard>
    </div>
  );
};

export default DetailedQueryPage;
