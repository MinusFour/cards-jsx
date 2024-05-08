let types = [
    'cards',
    'card',
    'card-header',
    'section',
    'action',
    'sections',
    'divider-style',
    'card-actions',
    'peek-card-header',
    'card-fixed-footer',
    'icon',
    'start-icon',
    'on-click',
    'button',
    'switch-control',
    'end-icon',
    'parameter',
    'parameters',
    'interaction',
    'color',
    'widget',
    'widgets',
    'options',
    'text-paragraph',
    'image',
    'decorated-text',
    'button-list',
    'text-input',
    'selection-input',
    'selection-item',
    'option',
    'date-time-picker',
    'divider',
    'grid',
    'columns',
    'componentList'
];

let typeSymbol = Symbol();

function setType(type, obj){
    if(!types.includes(type)){
        throw new Error('Unknown type: ' + type);
    }
    obj[typeSymbol] = type;
}

function getType(obj){
    return obj[typeSymbol];
}

export { typeSymbol as default, setType, getType };
