const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "4000";

app.get("/api/*", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
