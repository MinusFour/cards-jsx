import addOptionals from "../utils/addOptionals.js";
import { setType } from "./types.js";

function cardHeader({
    title,
    subtitle,
    imageType,
    imageUrl,
    imageAltText
}){
    const headerWithOptionals = addOptionals({
        title,
        subtitle,
        imageType,
        imageUrl,
        imageAltText
    }, {});

    setType('card-header', headerWithOptionals);

    return headerWithOptionals;
}

export default cardHeader;
