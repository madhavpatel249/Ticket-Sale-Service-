// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/users', require('./routes/users')); // Adjust the path if needed

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users')); // Define routes in separate files

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
