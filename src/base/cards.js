function cards({ version, children }){
    let obj = {};
    let actualVersion = +version || 2;
    if(actualVersion === 2){
        obj.cardsV2 = children || [];
    } else {
        throw new Error(`Version ${version} is not yet implemented or does not exist.`);
    }
    return obj;
};

export default cards;
