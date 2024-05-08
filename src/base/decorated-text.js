import addOptionals from "../utils/addOptionals.js";
import mapChildsToProps from "../utils/mapChildsToProps.js";
import { setType } from "./types.js";

function decoratedText({
    topLabel,
    text,
    wrapText,
    bottomLabel,
    children
}){
    const decoratedText = mapChildsToProps({
        'icon':'icon',
        'start-icon':'startIcon',
        'on-click':'onClick',
        'button':'button',
        'switch-control':'switchControl',
        'end-icon':'endIcon',
    }, children);

    const decoratedTextWithOptionals = addOptionals({ topLabel, text, wrapText, bottomLabel }, decoratedText);

    setType('decoted-text', decoratedTextWithOptionals);

    return decoratedTextWithOptionals;
}

export default decoratedText;
