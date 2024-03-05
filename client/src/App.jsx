import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
const helmetContext = {};
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/commonComponents/ScrollToTop";
import Register from "./pages/Register";
import About from "./pages/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Profile from "./pages/Profile";
import Hotels from "./pages/Hotels";
import HotelsDetail from "./pages/HotelsDetail";
import AdminLayout from "./layout/AdminLayout";
import GetHotels from "./pages/GetHotels";
import Admin from "./pages/Admin";
import CreateHotels from "./pages/CreateHotels";
import Verify from "./pages/Verify";
import AdminPageCategories from "./pages/AdminPageCategories";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import AdminFacilities from "./pages/AdminFacilities";
import AdminPageFaq from "./pages/AdminPageFaq";
import PrivateRoute from "./router/PrivateRoute";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/verify" element={<Verify />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/detail/:id" element={<HotelsDetail />} />
          </Route>
          <Route element={<PrivateRoute />}>
             <Route path="/admin" element={<AdminLayout />}>
              <Route path="/admin/gethotels" element={<GetHotels />} />
              <Route path="/admin/createhotels" element={<CreateHotels />} />
              <Route index element={<Admin />} />
              <Route
                path="/admin/categories"
                element={<AdminPageCategories />}
              />
              <Route path="/admin/facilities" element={<AdminFacilities />} />
              <Route path="/admin/faqs" element={<AdminPageFaq />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
