import React, {Component, useEffect, useState} from "react";
import ToDoList from "./components/ToDoList";
import CreateToDo from "./components/CreateToDo";
import {GetData, AddItem, ChangeItem, DeleteItem} from "./utils"

export default function App() {
    const [list, setList] = useState([]);
    useEffect(() => getDataFromServer(), []);

    const getDataFromServer = async () => {
        const {data} = await GetData();
        setList(data);
    };

    const createNewItem = (value) => {
        AddItem(value);
        getDataFromServer(); //стягиваем каждый раз инфу с сервера, чтобы показать, что на сервере всё работает
    };

    return (
        <div style={{padding: "25px"}}>
            <CreateToDo createNewItem={createNewItem}/>
            <ToDoList list={list}/>
        </div>
    );
}
