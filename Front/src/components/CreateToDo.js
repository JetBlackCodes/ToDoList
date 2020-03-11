import React, {useState} from "react";
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
    TextField,
} from '@material-ui/core';

export default function CreateToDo({createNewItem}) {
    const [text, setText] = useState("");

    const handleChange = event => {
        setText(event.target.value);
    };

    const handleKeyDown = event => {
        if(event.keyCode === 13) createNewItem(text);
    };

    return (
        <TextField placeholder="Add your task..."
                   variant="outlined"
                   fullWidth
                   InputProps={{
                       startAdornment: (
                           <InputAdornment position="start">
                               <PlaylistAdd/>
                           </InputAdornment>
                       ),
                   }}
                   onChange={handleChange}
                   value={text}
                   onKeyDown={handleKeyDown}
        />
    );
};
