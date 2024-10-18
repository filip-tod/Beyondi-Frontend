import './index.css'
import {NavBar} from "./components/navBar/NavBar.tsx";
import {LandingPage} from "./pages/landingPage/LandingPage.tsx";
import {Footer} from "./components/footer/Footer.tsx";

function App() {
  return (
    <>
      <NavBar/>
      <LandingPage/>
      <Footer/>
    </>
  )
}

export default App
