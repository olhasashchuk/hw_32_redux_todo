import { Button } from './Button.jsx';
import {useDispatch, useSelector} from "react-redux";
import selectors from "../../engine/todo/selectors.js";
import {deleteData} from "../../engine/todo/thunks.js";
export function ListItem(props) {
    const dispatch = useDispatch();
    const items = useSelector(selectors.items)
    const {children} = props
    const name = `checked_${Math.random()}`;

    const removeItem = ()=> {
        dispatch (deleteData(children));
    }
    return (
        <li className="list_component">
            <input id={name} className="form-check-input" type="checkbox" name="text_input" />
            <label
                htmlFor={name}
                className="list_component_text"
            >
                {children}
            </label>
            <Button className="btn-secondary" onClick={removeItem}>Remove</Button>
        </li>
    )

}