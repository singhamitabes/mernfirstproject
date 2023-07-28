const express = require("express")
const router = express.Router()

const {getAlltodo,postTodo,updateTodo,deleteTodo,specificTodo} = require("../Controller/controller")

router.route("/").get(getAlltodo)
router.route("/:id").get(specificTodo)
router.route("/").post(postTodo)
router.route("/:id").put(updateTodo)
router.route("/:id").delete(deleteTodo)

module.exports = router



