const app = require("express")();

app.get("/getData", function (req, res) {
    res.send('OK')
});