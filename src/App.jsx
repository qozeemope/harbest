import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/landing/Index";
import PlantingSeason from "./pages/PlantingSeason";
import AboutUs from "./pages/AboutUs.JSX";
import Learn from "./pages/Learn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/planting-season" element={<PlantingSeason />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="learn" element={<Learn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
