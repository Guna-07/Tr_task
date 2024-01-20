const express = require('express');

const proController = require('../controllers/projects');

const router = express.Router();

router.get('/', proController.getAllProducts);

router.post('/', proController.postProducts);

// router.put('/', proController.putProducts);

// router.delete('/:id', proController.deleteProducts);

module.exports = router;
