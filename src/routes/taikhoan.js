const express = require('express');
const router = express.Router();

const TaiKhoanController = require('../app/controllers/TaiKhoanController');

router.get('/create', TaiKhoanController.create);
router.post('/store', TaiKhoanController.store);
router.get('/:id/edit', TaiKhoanController.edit);
router.put('/:id', TaiKhoanController.update);
router.delete('/:id', TaiKhoanController.destroy);

module.exports = router;
