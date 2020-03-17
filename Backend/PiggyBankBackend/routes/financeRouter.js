var express = require('express');
var router = express.Router();

const financeController = require('../controllers/financeController');

/* GET */
router.get('/', financeController.getAll);

router.get('/:id', financeController.getById);

router.get('/getByType/:type/:ac_id/:create_date', financeController.getByType);

router.get('/:type/:ac_id/:year', financeController.getSummary);

router.get('/:type/:ac_id', financeController.getBalance);

/* POST */
router.post('/', financeController.insert);

/* PUT */
router.put('/:id', financeController.updateById);

router.put('/remove/:id', financeController.removeById);

module.exports = router;