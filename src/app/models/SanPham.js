const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const SanPham = new Schema(
    {
        ten: { type: String, require: true },
        hinhanh: { type: String, default: null },
        gia: { type: String, default: null },
        loaisp: { type: String },
        

        slug: { type: String, slug: 'ten', unique: true },
    },
    {
        timestamps: true
    },
);

// Add plugins
mongoose.plugin(slug);
SanPham.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('SanPham', SanPham);
