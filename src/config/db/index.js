// require('dotenv').config();

const mongoose = require('mongoose');
const ServerApiVersion  = require('mongoose');

const URI = 'mongodb+srv://ngocminh:Minh1805701@cluster0.31wphgu.mongodb.net/?retryWrites=true&w=majority';

const connect = async (e) => {
    try {
        // const URI = 'mongodb://localhost:27017/BillManage';
        mongoose.connect(await URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect } ;
