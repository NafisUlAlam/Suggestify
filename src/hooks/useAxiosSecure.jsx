import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
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
      if (error.status === 401 || error.status === 403) {
        logOut()
          .then()
          .catch((err) => console.log(err));
        navigate("/");
      }
    }
  );
  return axiosInstance;
};

export default useAxiosSecure;
