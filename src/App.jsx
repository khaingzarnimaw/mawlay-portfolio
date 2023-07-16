import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import AboutDetail from "./pages/AboutDetailPage";
import "./assets/css/button51.css"; //{beautiful css button about ထဲမှာရှိတဲ့  }
import "animate.css";
import "./assets/css/animation.css";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_detail" element={<AboutDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
