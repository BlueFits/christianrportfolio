const Animations =  {
    fadeFromBottom: {
        init: (elem) => {
            elem.style.opacity = "1";
            elem.style.transform= "translateY(0)";
        },
        onAnim: (elem) => {
            elem.style.opacity = "0";
            elem.style.transform= "translateY(10px)";
        },
    },
    fadeAndScale: {
        init: (elem) => {
            elem.style.opacity = "1";
            elem.style.transform = "translateY(0) scaleY(1)";
        },
        onAnim: (elem) => {
            elem.style.opacity = "0";
            elem.style.transform = "translateY(30px) scaleY(1.4)";
        }
    },
    fadeFromRight: {
        init: (elem) => {
            elem.style.opacity = "1";
            elem.style.transform = "translateX(0px)";
        },
        onAnim: (elem) => {
            elem.style.opacity = "0";
            elem.style.transform = "translateX(-10px)";
        }
    },
    fadeFromLeft: {
        init: (elem) => {
            elem.style.opacity = "1";
            elem.style.transform = "translateX(0px)";
        },
        onAnim: (elem) => {
            elem.style.opacity = "0";
            elem.style.transform = "translateX(10px)";
        }
    },
};

export default Animations;