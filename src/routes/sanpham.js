const express = require('express');
const cors = require('cors');
const router = express.Router();

const SanPhamController = require('../app/controllers/SanPhamController');

router.post('/create', cors(), SanPhamController.create);
router.get('/list', cors(), SanPhamController.list);
router.get('/:id/edit', cors(), SanPhamController.edit);
router.put('/:id', cors(), SanPhamController.update);
router.delete('/:id', cors(), SanPhamController.destroy);

module.exports = router;
