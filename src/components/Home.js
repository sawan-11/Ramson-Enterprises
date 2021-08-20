import Navbar from "./Navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { useState } from "react";

function Home() {
  const title = "Ramson Enterprises";
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#161f29";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f5f5f5";
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} title={title} />
      <Header mode={mode} toggleMode={toggleMode} title={title} />
      <HowItWorks mode={mode} toggleMode={toggleMode} />
      <Services mode={mode} toggleMode={toggleMode} />
      <About mode={mode} toggleMode={toggleMode} title={title} />
      <Contact mode={mode} toggleMode={toggleMode} />
      <Footer mode={mode} toggleMode={toggleMode} title={title} />
    </>
  );
}

export default Home;
