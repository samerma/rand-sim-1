const express = require('express')
const router = express.Router()

const todos = []
let id = 1

router.get('/todos', function (req, res) {
    res.send(todos)
})

router.post('/todo', function (req, res) {
    const text = req.body.text
    const newTodo = { id: id, text: text, complete: false }
    id++
    todos.push(newTodo)
    res.send(todos)
})

router.put('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    const t = todos.find(t => t.id == todoID)
    if (t.complete) {
        t.complete = false
    }
    else {
        t.complete = true
    }
    res.send(todos)
})

router.delete('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    console.log(todoID);

    const i = todos.findIndex(t => t.id == todoID)
    todos.splice(i, 1)

    res.send(todos)
})

module.exports = router