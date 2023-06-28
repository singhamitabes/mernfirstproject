const ToDoList = require("../Model/todoscehma")

const getAlltodo = async (req, res) => {
    const contact = await ToDoList.find({})
    res.send(contact)
}
const postTodo = async (req, res) => {
    const { task } = req.body
    try {
        const existingTask = await ToDoList.findOne({ todotask: task })
        if (existingTask) {
            return res.status(400).send("task is already present")
        }
        if (!task) {
            return res.status(400).send("task is required")
        }
        const todo = await ToDoList.create({
            todotask: task
        })
        res.status(201).json(todo)
        console.log(todo)
    } catch (error) {
        console.log(error);
    }
}
const updateTodo = async (req, res) => {
    try {
        const todo = await ToDoList.findById(req.params.id)
    if (!todo) {
        return res.status(400).send("task is not present")
    }
    const updatedTodos = await ToDoList.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.send(updatedTodos);
    } catch (error) {
        console.log(error);
    }
}
const deleteTodo = async (req, res) => {
    try {
        const todo = await ToDoList.findByIdAndDelete(req.params.id)
        if (!todo) {
            return res.status(404).send("task is not present")
        }
        res.status(200).send(todo)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAlltodo, postTodo, updateTodo, deleteTodo }


