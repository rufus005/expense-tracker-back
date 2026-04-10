const router = require('express').Router();
const c = require('../controllers/expenseController');
router.get('/:email', c.getExpenses);
router.post('/', c.addExpense);
router.put('/:id', c.updateExpense);
router.delete('/:id', c.deleteExpense);
module.exports = router;
