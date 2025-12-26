require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/nexwatch';

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err.message);
});

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/contact', contactRouter);

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`NexWatch backend (MongoDB) listening on port ${PORT}`);
});
