import {setType} from "./types.js";
import addOptionals from "../utils/addOptionals.js"
import mapChildsToProps from "../utils/mapChildsToProps.js";

function textInput({
    name,
    label,
    hintText,
    value,
    placeHolderText,
    children
}){
    const textInput = mapChildsToProps({
        'action':'onChangeAction',
        'suggestions':'initialSuggestions',
        'autocomplete':'autoCompleteAction'
    }, children);

    const textInputWithOptionals = addOptionals({
        name,
        label,
        hintText,
        value,
        placeHolderText
    }, textInput); 

    setType('text-input', textInputWithOptionals);

    return textInputWithOptionals;
}

export default textInput;
