import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route element={<MainLayout/>} >
           
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
