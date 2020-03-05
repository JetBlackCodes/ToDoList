import {DEFAULT_TODO_MODEL, TODOLIST_TEST_DATA} from "./model";
import {getIndexById, getItemById} from "./utils";

let todoList = TODOLIST_TEST_DATA;

export const GetData = () => {
    return todoList;
};

export const AddItem = (header, text) => {
    const id = Symbol();
    const newItem = {
        ...DEFAULT_TODO_MODEL,
        id: id,
        header: header,
        text: text
    };
    todoList.push(newItem);
    return id;
};

export const ChangeItem = (id, ...rest) => {
    let oldItem = getItemById(todoList, id);
    oldItem = {
        ...oldItem,
        header: rest?.header ?? oldItem.header,
        text: rest?.text ?? oldItem.text,
        isCompleted: rest?.isCompleted ?? oldItem.isCompleted
    };
};

export const DeleteItem = (id) => {
    const index = getIndexById(todoList, id);
    todoList.splice(index, 1);
};