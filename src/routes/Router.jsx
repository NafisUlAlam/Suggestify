import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Error from "../components/Error";
import Home from "../components/Home";
import Main from "../components/Main";
import PrivateRoute from "./PrivateRoute";
import MyQueries from "./../components/MyQueries";
import AddQueries from "./../components/AddQueries";
import UpdateQuery from "../components/UpdateQuery";
import DetailedQueryPage from "../components/DetailedQueryPage";
import MyRecommendations from "./../components/MyRecommendations";
import RecommendationsForMe from "../components/RecommendationsForMe";
import AllQueries from "../components/AllQueries";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/allqueries",
        element: <AllQueries></AllQueries>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

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
        path: "/recommendationsforme",
        element: (
          <PrivateRoute>
            <RecommendationsForMe></RecommendationsForMe>
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
