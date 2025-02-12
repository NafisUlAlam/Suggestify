import { useNavigate } from "react-router-dom";

const QueryBanner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hero min-h-screen bg-queryBanner">
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-text/90">
          <div className="">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold text-text">
              Unlock Smarter Product Decisions
            </h1>
            <p className="mb-5 text-sm md:text-base text-text">
              Engage with a community to ask questions and share valuable
              product insights. Explore recommendations, alternative options,
              and real experiences to guide you towards the best choices.
            </p>
            <button
              className="btn bg-primary hover:bg-primary/20 text-text border-0"
              onClick={() => {
                navigate("/addqueries");
              }}
            >
              Ask Away
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryBanner;
