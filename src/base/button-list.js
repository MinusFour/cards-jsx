import { setType } from "./types.js";

function buttonList({
    children
}) {
    const outerObj = {
        buttons: children,
    }

    setType('button-list', outerObj)

    return outerObj;
}

export default buttonList;
