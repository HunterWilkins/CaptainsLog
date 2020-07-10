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

app.get("/api/todos/:id", function(req, res) {
    console.log("HITTING API ROUTE");
    if (req.params.id === "all") {
        Todos.find({}).then(function(dbTodos) {
            res.json(dbTodos);
        })
    }

    else {
        Todos.find({
            id: req.params.id
        }).then(function(dbTodo) {
            res.json(dbTodo);
        })

    }
});

app.post("/api/newTodo", function(req, res) {
    Todos.create({
        id: req.body.title.trim().toLowerCase(),
        title: req.body.title,
        desc: req.body.desc,
        isOptional: req.body.isOptional,
        startTime: req.body.startTime,
        duration: req.body.duration,
        isCompleted: false,
    });

    res.sendStatus(200);
})

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, () => {
    console.log("Get your kicks on ROOT sixty-six");
});

module.exports = app;
