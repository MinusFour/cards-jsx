import addOptionals from '../utils/addOptionals.js';
import mapChildsToProps from '../utils/mapChildsToProps.js'
import { setType } from './types.js';

function card({ id, name, displayStyle, children }){
    const card = mapChildsToProps({
        'card-header': 'header',
        'section': 'sections',
        'divider-style': 'sectionDividerStyle',
        'card-actions': 'cardActions',
        'peek-card-header': 'peekCardHeader',
        'card-fixed-footer': 'fixedFooter'
    }, children);

    const cardWithOptionals = addOptionals({ name, displayStyle }, card);
    const outerObj = {
        card: cardWithOptionals
    };
    const outerObjWithOptionals = addOptionals({ cardId: id }, outerObj);

    setType('card',card)

    return outerObjWithOptionals;
}

export default card;
