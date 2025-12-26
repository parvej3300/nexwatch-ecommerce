const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const msg = new Message({ name, email, subject, message });
    await msg.save();
    res.status(201).json({ message: 'Message received' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
