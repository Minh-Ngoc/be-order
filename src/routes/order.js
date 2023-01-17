const express = require('express');
const router = express.Router();

const OrderController = require('../app/controllers/OrderController');

router.post('/create', OrderController.create);
router.put('/add/:id', OrderController.add);
router.get('/list', OrderController.list);
router.get('/detail/:id', OrderController.detail);
router.get('/:id/edit', OrderController.edit);
router.put('/:id', OrderController.update);
router.delete('/:id', OrderController.destroy);

module.exports = router;
