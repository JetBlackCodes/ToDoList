export const getIndexById = (arr, id) => {
    return arr.findIndex(item => item.id === id);
};

export const getItemById = (arr, id) => {
    return arr.find(item => item.id === id);
};