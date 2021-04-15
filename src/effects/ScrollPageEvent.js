/*
    To be used as a function that is returned in useEffect

    elem = id of the page element
*/
const ScrollPageEvent  = (elementId, callBack, prev) => {
    let start = null;

    const elem = document.getElementById(elementId);

    const wheelHandler = (e) => {
        const offset = elem.scrollTop;
        const maxPageHeight = (elem.scrollHeight - elem.clientHeight) - 1;

        if (offset >= maxPageHeight) {
            if (e.deltaY >= 90) {
                if (callBack) callBack();
            } 
        } 

        if (offset === 0) {
            if (e.deltaY <= -90) {
                if (prev) prev(); 
            }
        }
    };

    const touchStartHandler = (e) => {
        start = e.changedTouches[0];
    };

    const touchEndHandler = (e) => {
        const offset = elem.scrollTop;
        const maxPageHeight = (elem.scrollHeight - elem.clientHeight) - 1;


        let end = e.changedTouches[0];

        if (offset >= maxPageHeight) {
            if ((end.screenY - start.screenY) < 0) {
                if (callBack) callBack();
            }
        } 

        if (offset === 0) {
            if ((end.screenY - start.screenY) > 0) {
                if (prev) prev(); 
            }
        }
    };
    
    elem.addEventListener("wheel", wheelHandler);
    elem.addEventListener("touchstart", touchStartHandler);
    elem.addEventListener("touchend", touchEndHandler);

    return () => {
        if (document.getElementById(elem)) {
            elem.removeEventListener("touchmove", touchStartHandler);
            elem.removeEventListener("touchend", touchEndHandler);
            return elem.removeEventListener("wheel", wheelHandler);
        } else {
            //Handle error
        }
    };
};

export default ScrollPageEvent;