const addOptionals = (optionals, obj) => {
    let blank = {};
    Object.entries(optionals).forEach(([key, value]) => {
        if(value){
            blank[key] = value;
        }
    })
    return Object.assign(blank, obj);
};
export default addOptionals;
