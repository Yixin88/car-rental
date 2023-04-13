import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<RootLayout />}>
      






    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
