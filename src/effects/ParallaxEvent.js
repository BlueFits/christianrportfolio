/*
    To be used as a function that is returned in useEffect

    elementOffsetId - id of element that has the offset
    parallaxTargetId - id of element that will get the parallax
    percentage - percentage of parallax
*/
const parallaxEventFunction  = (elementOffsetId, parallaxTargetId, percentage) => {
    const handleScroll = () => {
        const offset = document.getElementById(elementOffsetId).scrollTop;
        document.getElementById(parallaxTargetId).style.backgroundPositionY = (offset * percentage) + "px";
    };
    
    document.getElementById(elementOffsetId).addEventListener("scroll", handleScroll);

    return () => {
        if (document.getElementById(elementOffsetId)) {
            return document.getElementById(elementOffsetId).removeEventListener("scroll", handleScroll);
        } else {
            //Handle error
        }
    };
};

export default parallaxEventFunction;