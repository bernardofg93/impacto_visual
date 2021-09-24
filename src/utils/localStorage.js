import { useEffect } from "react";

export const getStateLocalStorage = (key) => {
    const dataStorage = localStorage.getItem(key);

    if (dataStorage) {
        return JSON.parse(dataStorage);
    } else {
        return [];
    }
}

export const setStateLocalStorage = (state) => {
    localStorage.setItem('db', JSON.stringify(state));
}

export const updateStateCheckStorage = (storage, value, bolean) => {

    const stateUpItem = storage.map(val => {
        if (val.id === value) {
            return {
                ...val,
                state: bolean
            }
        }
        return val;
    })

    localStorage.setItem('dbListScreen', JSON.stringify(stateUpItem));
    
}

