import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import {ToDo} from "./ToDo";
import {GetData, AddItem, ChangeItem, DeleteItem} from "../utils"

export default function ToDoList() {
    const [list, setList] = useState([]);

    useEffect(() => getDataFromServer(), []);

    const getDataFromServer = async () => {
        const {data} = await GetData();
        setList(data);
    };

    return (
        <>
            {console.log(123, list)}
            {list.map(({header, text, isCompleted}) => (
                <ToDo header={header} text={text} isCompleted={isCompleted}/>
            ))}
        </>
    );
};
