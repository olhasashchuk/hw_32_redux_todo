import {v4 as uuidv4 } from 'uuid';
import slice from "./slice.js";

const getData = () =>  (dispatch) => {
    const data = JSON.parse(localStorage.getItem('items'))
    dispatch(slice.actions.setItems(data))
    dispatch(slice.actions.setLoading(false))
}

const setData = (event, items) => (dispatch) => {
    dispatch(slice.actions.setLoading(true))
    event.preventDefault();
    const newItem = {
        id: `item_${uuidv4()}`,
        text: event.target.text_input.value,
    };
    dispatch(slice.actions.addItem(newItem));
    localStorage.setItem('items', JSON.stringify([...items, newItem]));
    dispatch(slice.actions.setLoading(false))
}

const deleteData = (id) => (dispatch, getState)=> {
    dispatch(slice.actions.deleteItem(id));
    const newData = getState().todo.items;
    localStorage.setItem('items', JSON.stringify(newData));
}

const clearAllItems = () => {
    return (dispatch) => {
        const payload = [];
        dispatch(slice.actions.setItems(payload))
        localStorage.setItem('items', JSON.stringify(payload));
    }
}

export {
    getData,
    setData,
    deleteData,
    clearAllItems
}