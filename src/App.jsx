import { createBrowserRouter } from "react-router-dom";
import HomePage from "./component/HomePage";
import { RouterProvider } from "react-router";
import Stats from "./component/Stats";
import Content from "./component/Content";
import HabitPage from "./component/HabitPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/dashboard/home", element: <Content /> },
    { path: "/dashboard/stats", element: <Stats /> },
    { path: "/dashboard/habits", element: <HabitPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
