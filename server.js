const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const featureRoutes = require('./routes/features');
const expenseRoutes = require('./routes/expenses');

const app = express();

app.use(cors({
  origin: "https://expense-tracker-front-wheat.vercel.app",
  credentials: true
}));

app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');

    app.use('/api', authRoutes);
    app.use('/api/features', featureRoutes);
    app.use('/api/expenses', expenseRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));