const taikhoanRouter = require('./taikhoan');
const sanphamRouter = require('./sanpham');
const orderRouter = require('./order');
const serverless = require("serverless-http");


function route(app) {

    app.use('/taikhoan', taikhoanRouter);
    app.use(`/.netlify/functions/api/sanpham`, sanphamRouter);
    app.use(`/.netlify/functions/api/order`, orderRouter);

}


module.exports = route;
module.exports.handler = serverless(route);
