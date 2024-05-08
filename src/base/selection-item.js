import addOptionals from "../utils/addOptionals.js";
import { setType } from "./types.js";

function selectionItem({
    value,
    selected,
    startIconUri,
    bottomText,
    children
}){
    const text = children[0];
    const normalizedValue = value ?? text; 
    const selectionItem = {
        text
    };

    const selectionItemWithOptionals = addOptionals({
        normalizedValue,
        selected,
        startIconUri,
        bottomText
    }, selectionItem);

    setType('selection-item', selectionItemWithOptionals);
    return selectionItem;
};

export default selectionItem;
