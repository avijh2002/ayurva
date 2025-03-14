import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/Aboutus";
import Contactus from "./pages/Contactus.jsx";





function RoutesComponent() {
  

  const appRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<AboutUs />}
        />
        <Route
          path="/contact"
          element={<Contactus />}
        />
      </Route>
    )
  );

  return <RouterProvider router={appRoutes} />;
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesComponent />
  </StrictMode>,
)
