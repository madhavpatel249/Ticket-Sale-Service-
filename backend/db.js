// db.js or inside your main server file (e.g., index.js)
const mongoose = require('mongoose');

// Replace <username>, <password>, and <dbname> with your MongoDB credentials
const mongoURI = 'mongodb://localhost:27017/yourdbname'; // For local MongoDB
// const mongoURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/yourdbname?retryWrites=true&w=majority'; // For MongoDB Atlas

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));
