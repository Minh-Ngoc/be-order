const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;


const SanPham = new Schema({
    soluong: { type: Number, default: null },
    sanphamId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'SanPham',
    },
});

const Order = new Schema(
    {
        sanpham: [SanPham],
        soban: { type: String, default: null },
        ten: { type: String, default: null },
        date: { type: String, default: null },

        isPay: { type: Boolean, default: null },
        tongsotien: { type: String, default: null },
       
        slug: { type: String, slug: 'ten', unique: true },
    },
    {
        timestamps: true
    },
);

// Add plugins
mongoose.plugin(slug);
Order.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Order', Order);
