import React from "react";
import {ToDo} from "./ToDo";

export default function ToDoList({list}) {
    return (
        <>
            {list.map(({header, text, isCompleted}) => (
                <ToDo header={header} text={text} isCompleted={isCompleted}/>
            ))}
        </>
    );
};
