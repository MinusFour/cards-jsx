import { setType } from "./types.js";
import addOptionals from "../utils/addOptionals.js";
import mapChildsToProps from "../utils/mapChildsToProps.js";

function action(props){
    const {
        func,
        children,
        loadIndicator,
        persistValues,
        interaction
    } = props;

    const action = mapChildsToProps({
        'parameter':'parameters',
    }, children);

    const actionWithOptionals = addOptionals({
        loadIndicator,
        persistValues,
        interaction,
        'function': func,
    }, action);

    setType('action', actionWithOptionals);

    return actionWithOptionals;
}

export default action;
