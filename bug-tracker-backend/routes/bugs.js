const express = require('express');
const router = express.Router();
const Bug = require('../models/Bug');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ✅ Middleware to verify token with "Bearer" prefix handling
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(403).json({ message: 'No token provided' });

  const token = authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : authHeader;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// ✅ Report a new bug
router.post('/', verifyToken, async (req, res) => {
  try {
    const { title, description } = req.body;

    const newBug = new Bug({
      title,
      description,
      reportedBy: req.userId,
    });

    await newBug.save();

    res.status(201).json({ message: 'Bug reported successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Get all bugs
router.get('/', verifyToken, async (req, res) => {
  try {
    const bugs = await Bug.find().populate('reportedBy', 'username');
    res.json(bugs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Update bug status
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { status } = req.body;
    const updatedBug = await Bug.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updatedBug);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
