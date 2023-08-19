import "./App.css";
import Home from "./components/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MoviesContainer from "./components/MovieContainer";

function App() {
  const AppLayout = () => {
    return (
      <div>
        <Outlet />
      </div>
    );
  };
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:id",
          element: <MoviesContainer />,
        },
      ],
    },
  ]);
  return (
    <div>
      {/**
       * Header
       * Body
          MainContainer
            MovieContainer
              MovieCards
                Title
                Rating
                Description
          MovieInfo(Routing)
       **/}
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}
export default App;
