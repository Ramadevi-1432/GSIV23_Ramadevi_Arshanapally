import "./App.css";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MoviesContainer from "./components/MovieContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
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
