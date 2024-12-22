import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto container">
      {/* navbar */}

      <Navbar></Navbar>

      {/* children */}
      <Outlet />
      {/* footer */}

      <div className="mt-8">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
