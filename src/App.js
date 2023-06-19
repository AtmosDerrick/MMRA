import NavBar from "./component/NavBar";
import Index from "./pages/Index";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import DownloadPage from "./pages/DownloadPage";
import Footer from "./component/Footer";
import HelpCenter from "./pages/HelpCenter";

function App() {
  return (
    <div className="w-full mx-auto bg-blue-50 ">
      <NavBar />
      <Routes>
        <Route index element={<Index />} />
        <Route path="/downloads" element={<DownloadPage />} />
        <Route path="/help" element={<HelpCenter />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
