const getByPath = function (path, obj) {
    return (new String(path)).split('.').reduce((res, prop) => {
        return res && res[prop];
    }, obj);
}

export default getByPath;
