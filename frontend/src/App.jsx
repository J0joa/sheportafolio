import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Main from "./components/Main.jsx";
import Wellcome from "./components/Wellcome.jsx";
import AboutMe from "./components/AboutMe.jsx";
import { NavProvider } from "./context/useContext.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Experiece from "./components/Experiece.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import SinUp from "./components/SinUp.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <GoogleOAuthProvider clientId="820403337294-9cl2p2ljob6eruk3j1ld55p9pmoo6vs7.apps.googleusercontent.com">
      <NavProvider>
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen" >
          <Main />
        <Wellcome />
        <AboutMe />
        <Experiece />
        <Projects />
        <Services />
        <SinUp />
        <Contact />
        <Footer />

        </div>
        
      </NavProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
