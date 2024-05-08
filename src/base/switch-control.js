import {setType} from "./types.js";
import addOptionals from "../utils/addOptionals.js";
import mapChildsToProps from "../utils/mapChildsToProps.js";

function switchControl({
    name,
    value,
    selected,
    controlType,
    children
}){
    const switchControl = mapChildsToProps({
        'action':'onChangeAction',
    }, children);

    const switchControlWithOptionals = addOptionals({
        name,
        value,
        selected,
        controlType
    }, switchControl);

    setType('switch-control', switchControlWithOptionals);

    return switchControlWithOptionals;
}

export default switchControl;
