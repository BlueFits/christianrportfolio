import React, { useState } from 'react';
import { useTransition, animated, config } from 'react-spring';

//Pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Project from "./pages/Projects";
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

  return (
    <div>
      <div className={`section_container ${transition[0]}`} id="home">
        <Home />
        <NextTab 
          text="Next: Blogs"
          color={Colors.secondary}
          textColor="#fff"
          onClick={pageHandler.bind(this, "next")}
        />
      </div>
      <div className={`section_container ${transition[1]}`}>
        <Blogs />
        <NextTab 
          text="Next: Blogs"
          color={Colors.lightgrey}
          textColor={Colors.darkgrey}
          onClick={pageHandler.bind(this, "next")}
        />
      </div>
      <div className={`section_container ${transition[2]}`}>
        <Project />
        <NextTab 
          text="Next: Contact"
          color={Colors.lightblue}
          textColor="#fff"
          onClick={pageHandler.bind(this, "next")}
        />
      </div>
      <div className={`section_container ${transition[3]}`}>
        <section>
          <h1>Salut</h1>
        </section>
      </div>
    </div>
  )
}

export default App;