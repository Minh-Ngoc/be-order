const TaiKhoan = require('../models/TaiKhoan');

class TaiKhoanController {
    index(req, res, next) {
        TaiKhoan.find({})
            .then(taikhoans => {
                res.status(200).send({
                    taikhoan: taikhoans,
                    errCode: 200,
                })
            })
            .catch(err => {
                res.status(500).send({
                    errCode: 500,
                })
            })
    }

    create(req, res, next) {
        // const taikhoan = new TaiKhoan(req.body)
             
    }

    store(req, res, next) {

    }

    edit(req, res, next) {

    }

    update(req, res, next) {

    }

    destroy(req, res, next) {

    }


}

module.exports = new TaiKhoanController();
