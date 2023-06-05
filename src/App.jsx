import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Test from "./pages/Test";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
     {/* <NavBar/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
