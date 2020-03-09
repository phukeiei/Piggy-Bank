var express = require('express');
var router = express.Router();

const accountController = require('../controllers/accountController');

/* GET */
router.get('/', accountController.getAll);

router.get('/:id', accountController.getById);

/* POST */
router.post('/', accountController.insert);

/* PUT */
router.put('/:id', accountController.updateById);

router.put('/remove/:id', accountController.removeById);

module.exports = router;