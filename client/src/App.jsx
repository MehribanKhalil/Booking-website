import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
const helmetContext = {};
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Faq from "./pages/Faq";
import Login from "./pages/Login";

function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>} >
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/faq" element={<Faq/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
