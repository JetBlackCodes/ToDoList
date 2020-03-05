import React from "react";
import axios from "axios"

export const GetData = () => {
    axios.get('/getData')
        .then(function (response) {

        })
        .catch(function (error) {
            console.log(error);
        })
};

export const AddItem = () => {
    axios.post('/addItem', {
        header: 'shopping',
        text: 'buy tomatoes, cucumbers and chips'
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const ChangeItem = () => {
    axios.post('/changeItem', {
        id: "123",
        header: 'shopping',
        text: 'buy tomatos, cucumbers and chips'
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const DeleteItem = () => {
    axios.post('/deleteItem', {
        id: "123"
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};
