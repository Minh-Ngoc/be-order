const express = require("express");
const router = express.Router();

const SanPhamController = require('../app/controllers/SanPhamController');

const sanphamRouter = require('./sanpham');
const orderRouter = require('./order');

function route(app) {
    app.use(router.get('/sanpham/list', SanPhamController.list));
    app.use(sanphamRouter);
    app.use(orderRouter);

    app.use(router.get("/taikhoan", (req, res) => {
      res.json({
        taikhoan: "taikhoan!"
      });
    }));

    app.use(router.get("/", (req, res) => {
      res.json({
        hello: "hi!"
      });
    })
    );
    
    app.use(`/.netlify/functions/index`, router);
}

module.exports = route;
