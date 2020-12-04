import React, { useState } from 'react';
import { useTransition, animated, config } from 'react-spring';

//Pages
import NavMenu from "./pages/NavMenu";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Construction from "./pages/Construction";

//Components
import Splash from "./components/Splash";
import NextTab from "./components/NextTab";

import Colors from './constants/Colors';

const App = () => {

  const [transition, setTransition] = useState([
    "current_page",
    "next_page",
    "next_page",
    "next_page",
  ]);

  const [isNavShowing, setIsNavShowing] = useState(false);

  //Handlers
  const pageHandler = (motion) => {
    let arrClone = [...transition];
    const i = arrClone.indexOf("current_page");
    let temp = arrClone[i];
    if (motion === "next" && arrClone[i + 1]) {
      arrClone[i + 1] = temp;
      arrClone[i] = "";
      setTransition(arrClone);
    } else if (motion === "prev" && (arrClone[i - 1] === "")) {
      arrClone[i - 1] = temp;
      arrClone[i] = "next_page";
      setTransition(arrClone);
    }
  }

  const navHandler = () => {
    setIsNavShowing(!isNavShowing);
  }

  return (
    <div>
      {isNavShowing ? <NavMenu onClick={navHandler} /> : <div/>}
      <div style={{ zIndex: 3 }} className={`section_container ${transition[0]}`} id="home">
        <Home navHandler={navHandler} />
        <NextTab 
          text="Next: Blogs"
          color={Colors.secondary}
          textColor="#fff"
          onClick={pageHandler.bind(this, "next")}
        />
      </div>
      <div style={{ zIndex: 2 }} className={`section_container ${transition[1]}`}>
        <Blogs />
        <NextTab 
          text="Next: Blogs"
          color={Colors.lightgrey}
          textColor={Colors.darkgrey}
          onClick={pageHandler.bind(this, "next")}
        />
      </div>
      <div style={{ zIndex: 1 }} className={`section_container ${transition[2]}`}>
        <Project />
        <NextTab 
          text="Next: Contact"
          color={Colors.lightblue}
          textColor="#fff"
          onClick={pageHandler.bind(this, "next")}
        />
      </div>
      <div style={{ zIndex: 0 }} className={`section_container ${transition[3]}`}>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App;