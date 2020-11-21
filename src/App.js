import React, { useState, useCallback } from 'react';
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

  //Transition Hooks
  const [sectionIndex, setSectionIndex] = useState(0)
  const [transition, setTransition] = useState({
    config: config.slow,
    from: { opacity: 1, transform: 'translate3d(0,100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 1, transform: 'translate3d(0,-100%,0)' },
  });

  //Transition config
  const transitions = useTransition(sectionIndex, p => p, transition)

  //Methods
  const nextFunction = useCallback(() => setSectionIndex(state => (state + 1) % 3), []);

  //Renders
  const pages = [
    ({ style }) => <animated.div id ="home" style={{ ...style }} >
      <Home />
      <NextTab onClick={nextFunction} text="Next: Blogs" color={Colors.secondary} textColor="#fff"/>
    </animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: Colors.lightgrey }}>
      <Blogs />
      <NextTab onClick={nextFunction} text="Next: Projects" color={Colors.lightgrey} textColor="#474747" />
    </animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>
      <Project />
    </animated.div>,
  ]

  return (
    <div className="main_container">
      {/* <Splash /> */}
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}

export default App;