import addOptionals from "../utils/addOptionals.js";
import mapChildsToProps from "../utils/mapChildsToProps.js";
import { setType } from "./types.js";

function selectionInput({
    name,
    label,
    type,
    multiSelectMaxSelectedItems,
    multiSelectMinQueryLength,
    children
}){
    const selectionInput = mapChildsToProps({
        'option':'items',
        'action':'onChangeAction',
        'external-source':'externalDataSource',
        'platform-source':'platformDataSource'
    }, children);

    const selectionInputWithOptionals = addOptionals({
        name,
        label,
        type,
        multiSelectMinQueryLength,
        multiSelectMaxSelectedItems,
    }, selectionInput);

    setType('selection-input', selectionInputWithOptionals);

    return selectionInputWithOptionals;
}

export default selectionInput;
