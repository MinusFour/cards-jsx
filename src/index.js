import aliasMap from './base/alias.js';
import { getType, setType } from './base/types.js';
import * as base from './base/index.js';
import kebabToCamel from './utils/kebabToCamel.js';

function jsx(element, props, ...children){
    let baseComponent = resolveComponent(element);
    let obj = baseComponent({ ...props, children: children.flat() });
    //console.log("Got an object at :" + JSON.stringify(obj));
    if(typeof element === 'string' && getType(obj) !== element){
        setType(element, obj);
    }
    return obj;
}

function resolveComponent(element){
    if(typeof element === 'string'){
        //element is a base element
        const resolvedAlias = aliasMap[element] || element;
        //console.log('Alias resolved to ' + resolvedAlias);
        const elementCase = kebabToCamel(resolvedAlias);
        const baseComponent = base[elementCase];
        if(baseComponent == null){
            throw new Error('Base element not found.')
        } 
        return baseComponent;
    }
    return element;
}

export default jsx;
