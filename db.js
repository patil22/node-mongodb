const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/myapp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB Connected'))
// .catch((err) => console.log(err));

const connectdb = async() => {
    try{
        const conn = await mongoose.connect("mongodb://localhost:27017/Gaurav");
        console.log(`connected  ........ ${conn.connections.host}`);
    }
    catch(err){
        console.log(`not connected ${err.message}`)
    }
}
module.export  = connectdb;                                                                  