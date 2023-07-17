import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Test from "./pages/Test";
import NavBar from "./components/NavBar";
import "./assets/css/button51.css"; //{beautiful css button about ထဲမှာရှိတဲ့  }
import "animate.css"
import "./assets/css/animation.css"
import AboutDetail from "./components/resources/AboutDetail";///motal box အစား

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />

          <Route path="about_detail" element={<AboutDetail/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
