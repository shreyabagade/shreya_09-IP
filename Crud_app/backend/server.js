const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost/todo-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
const todoRoutes = require('./routes/todoRoutes');
app.use('/api/todos', todoRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
