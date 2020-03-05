import {GetData, AddItem, ChangeItem, DeleteItem} from "./dataBase"
const app = require("express")();

app.get("/getData", function (req, res) {
    const data = GetData();
    res.send(JSON.stringify(data))
});

app.post("/addItem", function (req, res) {
    const newItemIndex = AddItem(req.data.header, req.data.text);
    res.send(JSON.stringify(newItemIndex));
});

app.post("/changeItem", function (req, res) {
    ChangeItem(req.data.id, req.data);
});

app.post("/deleteItem", function (req, res) {
    DeleteItem(req.data.id);
});