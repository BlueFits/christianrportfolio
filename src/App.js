import React, { useState } from 'react';
import { useTransition, animated, config } from 'react-spring';

//Pages
import Home from "./pages/Home";
import Construction from "./pages/Construction";

//Components
import Splash from "./components/Splash";

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
  // const onClick = useCallback(() => setSectionIndex(state => (state + 1) % 3), []);

  //Renders
  const pages = [
    ({ style }) => <animated.div id ="home" style={{ ...style }}>
      <Home/>
    </animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
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