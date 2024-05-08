import addOptionals from "../utils/addOptionals.js";
import mapChildsToProps from "../utils/mapChildsToProps.js";
import { setType } from "./types.js";

function image({
    imageUrl,
    altText,
    children
}){
    const image = mapChildsToProps({
        'on-click':'onClick'
    }, children);

    const imageWithOptionals = addOptionals({ imageUrl, altText }, image);
    
    setType('image', imageWithOptionals);

    return imageWithOptionals;
}

export default image;
