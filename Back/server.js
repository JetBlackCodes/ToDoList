import {GetData, AddItem, ChangeItem, DeleteItem} from "./dataBase";
import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/items", (req, res) => {
    const data = GetData();
    res.send(data)
});

app.post("/item", (req, res) => {
    const {itemHeader} = req.body;

    const newItemIndex = AddItem(itemHeader);
    // res.send(newItemIndex);
});

app.put("/item", function (req, res) {
    ChangeItem(req.data.id, req.data);
});

app.delete("/item", function (req, res) {
    DeleteItem(req.data.id);
});

app.listen(PORT, function () {
    console.log("server listen on port", PORT);
});