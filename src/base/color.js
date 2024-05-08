import addOptionals from "../utils/addOptionals.js";
import { setType } from "./types.js";

function color({
    red,
    green,
    blue,
    alpha
}){
    const colorWithOptionals = addOptionals({
        red, green, blue, alpha
    }, {})

    setType('color', colorWithOptionals);

    return colorWithOptionals;
}

export default color;
