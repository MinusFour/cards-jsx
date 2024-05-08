import { setType } from "./types.js";
import addOptionals from "../utils/addOptionals.js";

function parameter({
    key,
    value
}){
    const parameterWithOptionals = addOptionals({
        key,
        value
    });

    setType('parameter', parameterWithOptionals);
    
    return parameterWithOptionals;
}

export default parameter;
