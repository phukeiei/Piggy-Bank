var express = require('express');
var router = express.Router();

const financialCategoryController = require('../controllers/financialCategoryController');

/* GET */
router.get('/', financialCategoryController.getAll);

router.get('/:id', financialCategoryController.getById);

/* POST */
router.post('/', financialCategoryController.insert);

/* PUT */
router.put('/remove/:id', financialCategoryController.removeById);

module.exports = router;