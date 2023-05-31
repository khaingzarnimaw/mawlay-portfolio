import About from "../components/About"
import Contant from "../components/Contant"
import NavBar from "../components/NavBar"
import Portfolio from "../components/Portfolio"
import Top from "../components/Top"

const Home = () => {
  return (
    <>
      {/* Home အရင်ဆုံးပေါ်အောင်လုပ် */}
      <NavBar/>
      <Top/>
      <About/>
      <Portfolio/>
      <Contant/>
      
    </>
  )
}

export default Home

