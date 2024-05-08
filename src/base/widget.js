import addOptionals from "../utils/addOptionals.js";
import mapChildsToProps from "../utils/mapChildsToProps.js";
import { setType } from "./types.js";

function widget({ horizontalAlignment, children }){
    if(children.length > 1){
        throw new Error('A widget only supports a single child.')
    }
    const widget = mapChildsToProps({ 
        'text-paragraph':'textParagraph',
        'image':'image',
        'decorated-text':'decoratedText',
        'button-list':'buttonList',
        'text-input':'textInput',
        'selection-input':'selectionInput',
        'date-time-picker':'dateTimerPicker',
        'divider':'divider',
        'grid':'grid',
        'columns':'columns'
    }, children);

    const widgetWithOptionals = addOptionals({ horizontalAlignment }, widget);

    setType('widget', widgetWithOptionals);

    return widgetWithOptionals;
}

export default widget;
