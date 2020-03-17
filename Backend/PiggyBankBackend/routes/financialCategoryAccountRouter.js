var express = require('express');
var router = express.Router();

const financialCategoryAccountController = require('../controllers/financialCategoryAccountController');

/* GET */
router.get('/', financialCategoryAccountController.getAll);

router.get('/:id', financialCategoryAccountController.getById);

/* POST */
router.post('/', financialCategoryAccountController.insert);

module.exports = router;