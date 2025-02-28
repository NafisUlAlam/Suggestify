import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

//https://assignment-11-server-theta-mocha.vercel.app
const axiosInstance = axios.create({
  baseURL: "https://assignment-11-server-theta-mocha.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      //console.log(error);
      if (error.status === 401 || error.status === 403) {
        logOut()
          .then(() => navigate("/"))
          .catch((err) => console.log(err));
      }
      Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default useAxiosSecure;
