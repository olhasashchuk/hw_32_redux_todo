import slice from "./slice.js";

const getData = (arg) => {
    console.log(arg)
    return (dispatch)=> {
        const data = JSON.parse(localStorage.getItem('items'))
        dispatch(slice.actions.setItems(data))
        dispatch(slice.actions.setLoading(false))
    }
}

const setData = (event, items) => {
    return(dispatch)=> {
        event.preventDefault();
        dispatch(slice.actions.setLoading(false))
        dispatch(slice.actions.addItem(event.target.text_input.value))
        dispatch(slice.actions.setLoading(false))
        localStorage.setItem('items', JSON.stringify([...items, event.target.text_input.value]))
    }
}

const deleteData = (itemToDelete) => {
    return (dispatch) => {
        dispatch(slice.actions.deleteItem(itemToDelete));
        const data = JSON.parse(localStorage.getItem('items'));
        const newData = data.filter((item) => item !== itemToDelete);
        localStorage.setItem('items', JSON.stringify(newData));
    }
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