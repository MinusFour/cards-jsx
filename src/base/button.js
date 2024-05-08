import addOptionals from "../utils/addOptionals.js";
import mapChildsToProps from "../utils/mapChildsToProps.js";
import { setType } from "./types.js";

function button({
    text,
    disabled,
    altText,
    children
}){
    const button = mapChildsToProps({
        'icon':'icon',
        'color':'color',
        'on-click':'onClick'
    }, children)

    const buttonWithOptionals = addOptionals({ text, disabled, altText }, button);

    setType('button', buttonWithOptionals);
    
    return buttonWithOptionals;
}

export default button;
