/*
    To be used as a function that is returned in useEffect

    elem = id of the page element
*/
const ScrollPageEvent  = (elementId, callBack, prev) => {
    const elem = document.getElementById(elementId);

    const wheelHandler = (e) => {
        const offset = elem.scrollTop;
        const maxPageHeight = (elem.scrollHeight - elem.clientHeight) - 1;

        if (offset >= maxPageHeight) {
            if (e.deltaY >= 100) {
                if (callBack) callBack();
            } 
        } 

        if (offset === 0) {
            console.log(e.deltaY);

            if (e.deltaY <= -100) {
                if (prev) prev(); 
            }
        }
    };
    
    elem.addEventListener("wheel", wheelHandler);

    return () => {
        if (document.getElementById(elem)) {
            return elem.removeEventListener("wheel", wheelHandler);
        } else {
            //Handle error
        }
    };
};

export default ScrollPageEvent;