// const mongoose = require('mongoose');
// const ServerApiVersion  = require('mongoose');

// const URI = 'mongodb+srv://ngocminh:Minh1805701@cluster0.31wphgu.mongodb.net/?retryWrites=true&w=majority';

// const connect = async (e) => {
//     try {
//         // const URI = 'mongodb://localhost:27017/BillManage';
//         mongoose.connect(await URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             serverApi: ServerApiVersion.v1,
//         });
        
//         console.log('Connect successfully!!!');
//     } catch (error) {
//         console.log('Connect failure!!!');
//     }
// }
// module.exports = { connect };

const mongodb = require("mongodb");
const URI = 'mongodb+srv://ngocminh:Minh1805701@cluster0.31wphgu.mongodb.net/?retryWrites=true&w=majority';

exports.handler = async function (event, context) {
  const client = await mongodb.connect(URI, { useUnifiedTopology: true })

  try {
    client.close()
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: "Please try again later."
    }
  }
}