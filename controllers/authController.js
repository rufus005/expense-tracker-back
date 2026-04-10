const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) return res.status(400).json({ error: 'Email already registered' });
    const user = await User.create({ email: email.toLowerCase(), password, name });
    // Seed default features
    const Feature = require('../models/Feature');
    const defaults = ['Food', 'Travel', 'Shopping', 'Bills', 'Other'];
    await Feature.insertMany(defaults.map(name => ({ name, userEmail: email.toLowerCase() })));
    res.status(201).json({ email: user.email, name: user.name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user || user.password !== password) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ email: user.email, name: user.name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
