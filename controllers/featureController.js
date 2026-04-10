const Feature = require('../models/Feature');

exports.getFeatures = async (req, res) => {
  try {
    const features = await Feature.find({ userEmail: req.params.email.toLowerCase() });
    res.json(features);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.addFeature = async (req, res) => {
  try {
    const feature = await Feature.create(req.body);
    res.status(201).json(feature);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.updateFeature = async (req, res) => {
  try {
    const feature = await Feature.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!feature) return res.status(404).json({ error: 'Feature not found' });
    res.json(feature);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.deleteFeature = async (req, res) => {
  try {
    await Feature.findByIdAndDelete(req.params.id);
    res.json({ message: 'Feature deleted' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};
