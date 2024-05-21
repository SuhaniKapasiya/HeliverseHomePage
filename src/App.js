import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="text-richblack-5">
      <div className="">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
