export const changeSelect = (array) => {
    if(array){
        return array.map(item => ({ value: String( item.id), label: item.title }))
    }    
};