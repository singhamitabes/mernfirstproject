const mongoose = require("mongoose")

const inputSchema = mongoose.Schema({
    todotask: {
        type: String,
        required : [true , "please Add some task"]
    }
})

module.exports = mongoose.model("ToDoList",inputSchema)