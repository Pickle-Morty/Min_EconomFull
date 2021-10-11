export const changeSelect = (array) => {
    if(array){
        return array.map(item => ({ label: item.title, value: item.id }))
    }    
};