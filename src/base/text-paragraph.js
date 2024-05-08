import addOptionals from "../utils/addOptionals.js";
import { setType } from "./types.js";

function textParagraph({
    children: [text],
}){
    const textParagraph = addOptionals({ text }, {}) 

    setType('text-paragraph', textParagraph);

    return textParagraph; 
}

export default textParagraph;
