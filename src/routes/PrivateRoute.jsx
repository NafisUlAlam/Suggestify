import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  //console.log(location);
  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  if (user) return children;
  return <Navigate to="/login" state={location?.pathname} replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};
export default PrivateRoute;
