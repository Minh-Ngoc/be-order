const SanPham = require('../models/SanPham');
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');

class SanPhamController {

    create(req, res, next) {
        console.log(req.body)
        const sanpham = new SanPham(req.body);
        sanpham
            .save()
            .then(() => {
                return res.status(201).send({
                    errCode: 201,
                })
            })
            .catch(err => {
                return res.status(500).send({
                    erCode: 500,
                    err
                })
            })
             
    }

    list(req, res, next) {
        SanPham.find({})
            .then(sanphams => {
                // console.log(sanphams);
                return res.json({
                    errCode: 200,
                    sanpham: sanphams
                })
            })
            .catch(err => {
                return res.json({
                    erCode: 500,
                    err
                })
            })

    }

    edit(req, res, next) {
        
    }

    update(req, res, next) {

    }

    destroy(req, res, next) {

    }


}

module.exports = new SanPhamController();
