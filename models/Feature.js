const mongoose = require('mongoose');
const featureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userEmail: { type: String, required: true, lowercase: true },
}, { timestamps: true });
module.exports = mongoose.model('Feature', featureSchema);
