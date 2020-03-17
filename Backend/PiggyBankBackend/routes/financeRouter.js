var express = require('express');
var router = express.Router();

const financeController = require('../controllers/financeController');

/* GET */
router.get('/', financeController.getAll);

router.get('/:id', financeController.getById);

/* POST */
router.post('/', financeController.insert);

/* PUT */
router.put('/:id', financeController.updateById);

router.put('/remove/:id', financeController.removeById);

router.get('/:id', financeController.getSummary);

module.exports = router;