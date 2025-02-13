import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { toast } from "react-toastify";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-theta-mocha.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => toast.error(err));
  }, []);
  return (
    // <section className="my-12 py-6 lg:py-12 bg-[#f4f4f4] mt-12 bg-banner4 bg-no-repeat bg-center bg-cover">
    <section className="my-12 py-6 lg:py-12 bg-primary/10 rounded-lg">
      <div className="text-center space-y-4 w-11/12 mx-auto mb-6 lg:mb-12 lg:mt-12 ">
        <h1 className=" text-xl font-bold md:text-2xl lg:text-4xl text-center my-8 ">
          Our Satisfied Customers
        </h1>
        <p className=" text-xl font-medium text-center my-8">
          Suggestify has served over 15,000 customers with excellent performance
          and guaranteed client satisfaction. Have a look what our customers
          have to say about us.
        </p>
      </div>
      <div></div>
      <Marquee pauseOnHover speed={100}>
        {reviews.map((review) => (
          <div
            key={review._id}
            className="flex flex-col items-center justify-center space-y-4 text-center p-4  lg:space-y-0 bg-transparent lg:gap-4 max-w-2xl  mr-8 text-text"
          >
            <div className="avatar">
              <div className="w-24 h-24 rounded-full">
                <img src={review.photo} />
              </div>
            </div>
            <h1 className="text-lg font-bold ">{review.title}</h1>
            <p className="text-sm font-medium ">{review.description}</p>
            <p className="font-light text-sm">
              {review.name}, {review.position}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Review;
