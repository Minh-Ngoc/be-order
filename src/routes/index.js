const taikhoanRouter = require('./taikhoan');
const sanphamRouter = require('./sanpham');
const orderRouter = require('./order');

function route(app) {
    app.use('/taikhoan', taikhoanRouter);
    app.use('/sanpham', sanphamRouter);
    app.use('/order', orderRouter);
    
}

module.exports = route;
