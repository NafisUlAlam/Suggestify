import React from "react";
import { useNavigate } from "react-router-dom";

const QueryBanner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-conten text-gray-200 text-center">
          <div className="">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">
              Unlock Smarter Product Decisions
            </h1>
            <p className="mb-5 text-sm md:text-base">
              Engage with a community to ask questions and share valuable
              product insights. Explore recommendations, alternative options,
              and real experiences to guide you towards the best choices.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/addqueries");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryBanner;
