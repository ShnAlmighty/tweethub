// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/message');
const userRoutes = require('./routes/user');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send("Welcome to Twitter Service");
})

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/message', messageRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
