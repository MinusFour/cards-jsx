function kebabToCamel(str){
    return str.replaceAll(/-\w/g, (s)=>s[1].toUpperCase());
}

export default kebabToCamel;
