import {setType} from "./types.js";
import addOptionals from "../utils/addOptionals.js";
import mapChildsToProps from "../utils/mapChildsToProps.js";

function section({
    header,
    collapsible,
    uncollapsibleWidgetsCount,
    children
}){
    const section = mapChildsToProps({
        'widget':'widgets',
    }, children);

    const sectionWithOptionals = addOptionals({
        header,
        collapsible,
        uncollapsibleWidgetsCount
    }, section);

    setType('section', sectionWithOptionals);
    return sectionWithOptionals;
}

export default section;
