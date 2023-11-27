import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/landing/Index";
import PlantingSeason from "./pages/PlantingSeason";
import AboutUs from "./pages/AboutUs";
import Learn from "./pages/Learn";
import AccountIndex from "./pages/auth/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/planting-season" element={<PlantingSeason />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="learn" element={<Learn />} />
          <Route path="account-setup" element={<AccountIndex />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
