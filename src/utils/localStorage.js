export const getStateLocalStorage = () => {
    const dataStorage = localStorage.getItem('db');

    if(dataStorage){
        return JSON.parse(dataStorage);
    }else {
        return [];
    }
}

export const setStateLocalStorage = (state) => {
    localStorage.setItem('db', JSON.stringify(state));
}

