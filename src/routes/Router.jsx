import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Error from "../components/Error";
import Home from "../components/Home";
// import ForgotPass from "../components/ForgotPass";
// import Main from "../components/Main";
// import PrivateRoute from "./PrivateRoute";
// import AddEquipments from "./../components/AddEquipments";
// import AllEquipments from "../components/AllEquipments";
// import DetailedEquipmentCard from "../components/DetailedEquipmentCard";
// import MyEquipments from "./../components/MyEquipments";
// import UpdateEquipments from "./../components/UpdateEquipments";
// import AllProducts from "../components/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Home></Home>,
    children: [
      //   {
      //     path: "/",
      //     element: <Main></Main>,

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
      //   },
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
      //   {
      //     path: "/addequipments",
      //     element: (
      //       <PrivateRoute>
      //         <AddEquipments></AddEquipments>
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/myequipments",
      //     element: (
      //       <PrivateRoute>
      //         <MyEquipments></MyEquipments>
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: `/equipments/:id`,
      //     element: (
      //       <PrivateRoute>
      //         <DetailedEquipmentCard></DetailedEquipmentCard>
      //       </PrivateRoute>
      //     ),
      //     loader: (e) =>
      //       fetch(
      //         `https://assignment-10-server-nu-six.vercel.app/equipments/${e.params.id}`
      //       ),
      //   },
      //   {
      //     path: `/update/:id`,
      //     element: (
      //       <PrivateRoute>
      //         <UpdateEquipments></UpdateEquipments>
      //       </PrivateRoute>
      //     ),
      //     loader: (e) =>
      //       fetch(
      //         `https://assignment-10-server-nu-six.vercel.app/equipments/${e.params.id}`
      //       ),
      //   },
    ],
  },
]);

export default router;
