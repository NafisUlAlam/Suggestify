import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Error from "../components/Error";
import Home from "../components/Home";
// import ForgotPass from "../components/ForgotPass";
import Main from "../components/Main";
import PrivateRoute from "./PrivateRoute";
// import AddEquipments from "./../components/AddEquipments";
// import AllEquipments from "../components/AllEquipments";
// import DetailedEquipmentCard from "../components/DetailedEquipmentCard";
// import MyEquipments from "./../components/MyEquipments";
// import UpdateEquipments from "./../components/UpdateEquipments";
// import AllProducts from "../components/AllProducts";
import MyQueries from "./../components/MyQueries";
import AddQueries from "./../components/AddQueries";
import UpdateQuery from "../components/UpdateQuery";
import DetailedQueryPage from "../components/DetailedQueryPage";
import MyRecommendations from "./../components/MyRecommendations";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Main></Main>,

        //     children: [
        //       {
        //         path: "/",
        //         element: <AllProducts></AllProducts>,
        //       },
        //       {
        //         path: "/allproducts",
        //         element: <AllProducts></AllProducts>,
        //       },
        //       {
        //         path: "/sports",
        //         element: <AllProducts></AllProducts>,
        //       },
        //       {
        //         path: "/fitness",
        //         element: <AllProducts></AllProducts>,
        //       },
        //     ],
      },
      //   {
      //     path: "/allequipments",
      //     element: <AllEquipments></AllEquipments>,
      //     loader: () =>
      //       fetch("https://assignment-10-server-nu-six.vercel.app/equipments"),
      //   },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      //   {
      //     path: "/forgotpassword",
      //     element: <ForgotPass></ForgotPass>,
      //   },

      {
        path: "/myqueries",
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/myrecommendations",
        element: (
          <PrivateRoute>
            <MyRecommendations></MyRecommendations>
          </PrivateRoute>
        ),
      },
      {
        path: "/addqueries",
        element: (
          <PrivateRoute>
            <AddQueries></AddQueries>
          </PrivateRoute>
        ),
      },
      {
        path: `/detailquery/:id`,
        element: (
          <PrivateRoute>
            <DetailedQueryPage></DetailedQueryPage>
          </PrivateRoute>
        ),
        loader: (e) => fetch(`http://localhost:5000/queries/${e.params.id}`),
      },
      {
        path: `/updatequery/:id`,
        element: (
          <PrivateRoute>
            <UpdateQuery></UpdateQuery>
          </PrivateRoute>
        ),
        loader: (e) => fetch(`http://localhost:5000/queries/${e.params.id}`),
      },
    ],
  },
]);

export default router;
