const Order = require('../models/Order');
const SanPham = require('../models/SanPham');

class OrderController {

    create(req, res, next) {
        console.log(req.body)
        const order = new Order({
            sanpham: {
                soluong: req.body.soluong,
                sanphamId: req.body.sanphamId
            },
            soban: req.body.soban,
        });
        order
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

    add(req, res, next) {
        console.log(req.params.id)
        Order.updateOne(
            {_id : req.params.id}, 
            { $push: {
                "sanpham": {
                    sanphamId: req.body.sanphamId,
                    soluong: req.body.soluong,
            }
          }
        })
        .then(() => res.status(200).send({
            errCode: 200,
        }))
        .catch(err => res.status(500).send({
            errCode: 500,
            err,
        }));
    }

    list(req, res, next) {
        Order.find({})
            .then(orders => {
                // console.log(orders);
                return res.status(200).send({
                    errCode: 200,
                    order: orders
                })
            })
            .catch(err => {
                return res.status(500).send({
                    erCode: 500,
                    err
                })
            })
    }

    detail (req, res, next) {
        console.log(req.params.id);
        Promise.all([
            Order.findById(req.params.id), SanPham.find({})
        ])
            .then(([order, sanphams]) => res.status(200).send({
                    errCode: 200,
                    order: order,
                    sanpham: sanphams,
                }))
            .catch(err => {
                return res.status(500).send({
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

module.exports = new OrderController();
