import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home"
import About from "./pages/About";
import Vehicle from "./pages/Vehicle";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route to='about' element={<About />} />
      <Route to='vehicle_models' element={<Vehicle />} />
      <Route to='testimonials' element={<Testimonials />} />
      <Route to='our_team' element={<Team />} />
      <Route to='contact' element={<Contact />} />






    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
