const express = require('express');
const router = express.Router();

const SanPhamController = require('../app/controllers/SanPhamController');

router.post('/create', SanPhamController.create);
router.get('/list', SanPhamController.list);
router.get('/:id/edit', SanPhamController.edit);
router.put('/:id', SanPhamController.update);
router.delete('/:id', SanPhamController.destroy);

module.exports = router;
