import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-background text-text">
      {/* navbar */}

      <Navbar></Navbar>

      {/* children */}
      <div className="w-11/12 mx-auto container">
        <Outlet />
        {/* footer */}

        <div className="mt-8">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
