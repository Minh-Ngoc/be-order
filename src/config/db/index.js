require('dotenv').config();

const mongoose = require('mongoose');

const mongodb = require('mongodb');
// const ServerApiVersion  = require('mongoose');

const URI = 'mongodb+srv://ngocminh:Minh1805701@cluster0.31wphgu.mongodb.net/?retryWrites=true&w=majority';
// const URI = 'mongodb://localhost:27017/BillManage';
const client = await mongodb.MongoClient.connect(URI);
const conn = mongoose.createConnection().setClient(client);

const connect = async (e) => {
    try {
        // mongoose.connect(await URI, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     serverApi: ServerApiVersion.v1,
        // });
        conn.readyState(1); // 1, means 'CONNECTED'

        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}


module.exports = connect;
