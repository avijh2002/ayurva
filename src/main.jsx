import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/Aboutus";
import Contactus from "./pages/Contactus.jsx";
import Assessment from './pages/Assessment.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import AuthGuard from './components/AuthGuard.jsx';
import SpecialistsPage from './pages/Specialists.jsx';





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
        <Route
          path="/assessment"
          element={<Assessment />}
        />
        <Route
          path="/specialists"
          element={
              <SpecialistsPage />
          }
        />
        <Route
          path="/admin"
          element={
            <AuthGuard>
              <AdminDashboard />
            </AuthGuard>
          }
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
