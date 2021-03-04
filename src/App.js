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

//Constants
import Colors from './constants/Colors';

const App = () => {

  const [transition, setTransition] = useState([
    "current_page",
    "next_page",
    "next_page",
    "next_page",
  ]);

  const [textStatus, setTextStatus] = useState([
    "hide_text", 
    "hide_text", 
    "hide_text",
    "hide_text"
  ]);

  const [hoverNav, setHoverNav] = useState([
    "circle-filled",
    "",
    "",
    "",
  ]);

  //Nav Menu
  const [navMenuStatus, setNavMenuStatus] = useState("nav_menu_hide");

  //Blogs
  const [blogState, setBlogState] = useState("from_bottom");
  const [blogNextHidden, setBlogNextHidden] = useState("blog_next_container_hidden");


  const [selectedProject, setSelectedProject] = useState([
    "projects_selected",
    "",
    "",
    "",
  ]);

  //Projects Handlers
  const projectCategoryClickHandler = (category) => {
    const btyElem = document.getElementById("bty_project_id");
    const justReturnElem = document.getElementById("just_return_id");

    //Anim Functions
    const showAnim = (elem) => {
      elem.style.transform = "translateY(0px)";
      elem.style.opacity = "1";
      elem.style.display = "block"; 
    };

    const hideAnim = (elem) => {
      elem.style.opacity = "0";
      elem.style.transform = "translateY(60px)";

      setTimeout(() => {
        elem.style.display = "none"; 
      }, 500);
    };

    //State Object
    const showStates = {
      all: () => {
        showAnim(btyElem);
        showAnim(justReturnElem);
      },
      website: () => {
        showAnim(btyElem);
        showAnim(justReturnElem);
      },
      illustration: () => {
        showAnim(justReturnElem);
        hideAnim(btyElem);
      },
      mobile: () => {
        showAnim(btyElem);
        hideAnim(justReturnElem);
      },
    };


      switch (category) {
          case "all":
            showStates.all();

            setSelectedProject([
              "projects_selected",
              "",
              "",
              "",
            ]);
            break;
          case "website":
            showStates.website();


            setSelectedProject([
              "",
              "projects_selected",
              "",
              "",
            ]);
            break;
          case "illustration":
            showStates.illustration();

            setSelectedProject([
              "",
              "",
              "projects_selected",
              "",
            ]);
            break;
          case "mobile":
            showStates.mobile();

            setSelectedProject([
              "",
              "",
              "",
              "projects_selected",
            ]);
            break;
          default:
            showStates.all();
      }
  };

  //App.js Handlers
  const pageHandler = (motion, toPage) => {
    let arrClone = [...transition];
    let navClone = [...hoverNav];
    const i = arrClone.indexOf("current_page");
    const j = navClone.indexOf("circle-filled");
    let temp = arrClone[i];
    let tempJ = navClone[j];

    //Reset Blog Animations
    setBlogNextHidden("blog_next_container_hidden");
    setBlogState("from_bottom");

    //Handle page reset here side note: contact has a naming error footer.

    let pageReset = {
      home: document.getElementById("home"),
      projects: document.getElementById("project"),
      contact: document.getElementById("footer"),
    };
    
    for (const prop in pageReset) {
      if (prop !== motion) {
        setTimeout(() => {
          pageReset[prop].scrollTop = 0;
        }, 600);
      }
    }

    if (motion === "next" && arrClone[i + 1]) {

      arrClone[i + 1] = temp;
      arrClone[i] = "";
      setTransition(arrClone);

      navClone[j + 1] = tempJ;
      navClone[j] = "";
      setHoverNav(navClone);

    } else if (motion === "prev" && (arrClone[i - 1] === "")) {

      arrClone[i - 1] = temp;
      arrClone[i] = "next_page";
      setTransition(arrClone);

    } else if (motion === "home") {

      setTransition([
        "current_page",
        "next_page",
        "next_page",
        "next_page",
      ]);
      setHoverNav([
        "circle-filled",
        "",
        "",
        "",
      ]);

    } else if (motion === "blogs") {

      setTransition([
        "",
        "current_page",
        "next_page",
        "next_page",
      ]);
      setHoverNav([
        "",
        "circle-filled",
        "",
        "",
      ]);

    } else if (motion === "projects") {

      setTransition([
        "",
        "",
        "current_page",
        "next_page",
      ]);
      setHoverNav([
        "",
        "",
        "circle-filled",
        "",
      ]);

    } else if (motion === "contact") {

      setTransition([
        "",
        "",
        "",
        "current_page",
      ]);
      setHoverNav([
        "",
        "",
        "",
        "circle-filled",
      ]);

    }

    //Blogs animation reveal
    if (toPage === "blogs") {
      setTimeout(() => {
        setBlogState("");
      }, 500);

      setTimeout(() => {
        setBlogNextHidden("");
      }, 1500);
    }

    if (toPage === "projects") {
        const btyElem = document.getElementById("bty_project_id");
        const justReturnElem = document.getElementById("just_return_id");

        const showAnim = (elem) => {
          elem.style.display = "block"; 
          elem.style.transform = "translateY(0px)";
          elem.style.opacity = "1";
        };

        setSelectedProject([
          "projects_selected",
          "",
          "",
          "",
        ]);
        showAnim(btyElem);
        showAnim(justReturnElem);
    }
  }

  const navHandler = () => {
    if (navMenuStatus === "nav_menu_hide") {
      setTimeout(() => {
        setTextStatus([
          "",
          "hide_text",
          "hide_text",
          "hide_text",
        ]);
      }, 400);

      setTimeout(() => {
        setTextStatus([
          "",
          "",
          "hide_text",
          "hide_text",
        ]);
      }, 500);

      setTimeout(() => {
        setTextStatus([
          "",
          "",
          "",
          "hide_text",
        ]);
      }, 600);

      setTimeout(() => {
        setTextStatus([
          "",
          "",
          "",
          "",
        ]);
      }, 700);

      setNavMenuStatus("");
    } else {
      setNavMenuStatus("nav_menu_hide");
      setTimeout(() =>{
        setTextStatus([
          "hide_text",
          "hide_text",
          "hide_text",
          "hide_text",
        ]);
      }, 600);
    }
  }

  return (
    <div>
      {/* <Splash /> */}
      <div className="hover_nav_container">
        <div onClick={pageHandler.bind(this, "home")} className={`circle-icon ${hoverNav[0]}`}></div>
        <div onClick={pageHandler.bind(this, "blogs", "blogs")} className={`circle-icon ${hoverNav[1]}`}></div>
        <div onClick={pageHandler.bind(this, "projects", "projects")} className={`circle-icon ${hoverNav[2]}`}></div>
        <div onClick={pageHandler.bind(this, "contact")} className={`circle-icon ${hoverNav[3]}`}></div>
      </div>

      <NavMenu 
        navClick={pageHandler}
        onClick={navHandler} 
        navStatus={navMenuStatus} 
        textStatus={textStatus}
      />

      <div style={{ zIndex: 3 }} className={`section_container ${transition[0]}`} id="home">
        <Home navHandler={navHandler} nextOnClick={pageHandler.bind(this, "blogs", "blogs")}/>
      </div>

      <div style={{ zIndex: 2 }} className={`section_container ${transition[1]}`} id="blogs">
        <Blogs 
          blogState={ blogState }
          nextOnClick={pageHandler.bind(this, "projects", "projects")}
          prev={pageHandler.bind(this, "home")}
          blogNextHidden={blogNextHidden}
        />
      </div>
      
      <div style={{ zIndex: 1 }} className={`section_container ${transition[2]}`} id="project">
        <Project 
          selected={selectedProject}
          projectCategoryClickHandler={projectCategoryClickHandler}
          nextOnClick={pageHandler.bind(this, "contact")}
          prev={pageHandler.bind(this, "blogs", "blogs")}
        />
      </div>
      
      <div style={{ zIndex: 0 }} className={`section_container ${transition[3]}`} id="footer">
        <Contact prev={pageHandler.bind(this, "projects", "projects")}/>
        <Footer />
      </div>
    </div>
  )
}

export default App;