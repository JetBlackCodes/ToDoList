import {DEFAULT_TODO_MODEL} from "./model";
import {getIndexById, getItemById} from "./utils";

let todoList = [];

export const GetData = () => {
    return todoList;
};

export const AddItem = (header, text) => {
    const newItem = {
        ...DEFAULT_TODO_MODEL,
        id: Symbol(),
        header: header,
        text: text
    };
    todoList.push(newItem);
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