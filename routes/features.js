const router = require('express').Router();
const c = require('../controllers/featureController');
router.get('/:email', c.getFeatures);
router.post('/', c.addFeature);
router.put('/:id', c.updateFeature);
router.delete('/:id', c.deleteFeature);
module.exports = router;
