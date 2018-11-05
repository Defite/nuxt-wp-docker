const getByPath = function (props, object) {
    if (typeof props === 'string') {
        props = props.split('.');
    }  
      
    if (object === undefined || object === null) {
      return;
    }
    
    if (props.length === 0) {
      return object;
    }
    
    const foundedProps = object[props[0]];
    const remainingProps = props.slice(1);
    
    return getByPath(remainingProps, foundedProps);
      
}

export default getByPath;