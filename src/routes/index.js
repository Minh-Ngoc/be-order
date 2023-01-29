const express = require("express");
const router = express.Router();

const SanPham = require('../app/models/SanPham');

const sanphamRouter = require('./sanpham');
const orderRouter = require('./order');

function route(app) {
    // app.use(router.get('/sanpham/list', (req, res, next) => {
    //   SanPham.find({})
    //       .then(sanphams => {
    //           // console.log(sanphams);
    //           return res.send({
    //               errCode: 200,
    //               sanpham: sanphams
    //           })
    //       })
    //       .catch(err => {
    //           return res.send({
    //               erCode: 500,
    //               err
    //           })
    //       })
    //     })
    //   );
    app.use(sanphamRouter);
    app.use(orderRouter);

    app.use(router.get("/taikhoan", (req, res) => {
      SanPham.find({})
        .then(sanphams =>
          res.json({
            taikhoan: "taikhoan!",
            sanpham: sanphams,
          })
        )
        .catch(err => err);
    }));

    app.use('/', router.get("/", (req, res) => {
      res.json({
        hello: "hi!"
      });
    })
    );
    
    app.use(`/.netlify/functions/index`, router);
}

module.exports = route;
