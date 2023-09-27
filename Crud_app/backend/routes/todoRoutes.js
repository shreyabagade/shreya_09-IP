const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Create a new todo
router.post('/', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create todo' });
  }
});

// Read all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch todos' });
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update todo' });
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete todo' });
  }
});

module.exports = router;
