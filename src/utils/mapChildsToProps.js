import type from "../base/types.js";

const mapChildsToProps = (conf, children) => {
    if(children == null){
        return {};
    }
    let result = children.reduce((obj, child) => {
        const t = Array.isArray(child)
            ? child[0][type]
            : child[type];

        const prop = conf[t];
        if(prop){
            obj[prop] = child;
        }
        return obj;
    }, {});
    return result;
};

export default mapChildsToProps;
