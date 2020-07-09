const express = require("express");
const PORT = process.env.PORT || 3001;
const fs = require("fs");
const app = express();

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/captainslog";
const mongoose = require("mongoose");
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on("connected", function() {
    console.log("\nConnected to Captain's Log Database");
});

let Todos = require("./models/todo.js");

const path = require("path");

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, () => {
    console.log("Get your kicks on ROOT sixty-six");
});

module.exports = app;
