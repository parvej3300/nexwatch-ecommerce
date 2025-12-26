const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const { items, customer, total } = req.body;
    if (!items || items.length === 0) return res.status(400).json({ error: 'No items in order' });

    const order = new Order({ items, customer, total });
    await order.save();
    res.status(201).json({ orderId: order._id, message: 'Order placed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
