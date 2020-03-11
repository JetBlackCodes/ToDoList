import React from "react";
import axios from "axios"

const URL = "http://localhost:4000";

export const GetData = () => {
    return axios.get(`${URL}/items`)
        .catch(function (error) {
            console.log(error);
        })
};

export const AddItem = (itemHeader) => {
    return axios.post(`${URL}/item`, {
        itemHeader: itemHeader
    })
        .catch(function (error) {
            console.log(error);
        });
};

export const ChangeItem = () => {
    axios.put(`${URL}/item`, {
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
    axios.delete(`${URL}/item`, {
        id: "123"
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};
