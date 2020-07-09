const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let TodoSchema = new Schema ({
    id: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    desc: {
        Type: String
    },

    startTime: {
        Type: Date,
    },

    duration: {
        type: Number,
        required: true
    },

    isOptional: {
        type: Boolean,
        required: true
    },

    isCompleted: {
        type: Boolean,
        required: true
    },
  
});

let Todos = mongoose.model("Todo", TodoSchema, "Todos");

module.exports = Todos;