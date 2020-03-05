import {DEFAULT_TODO_MODEL} from "./model"
import {} from "./model"
const app = require("express")();

app.get("/getData", function (req, res) {
    res.send(JSON.stringify(todoList))
});

app.post("/addItem", function (req, res) {

    res.send(JSON.stringify(todoList))
});

app.post("/changeItem", function (req, res) {
    res.send(JSON.stringify(todoList))
});

app.post("/deleteItem", function (req, res) {
    res.send(JSON.stringify(todoList))
});