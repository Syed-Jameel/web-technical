//mongoose is used to create connection bet mongoDB and nodejs(expressjs)server.
//mongoose is ODM(object databse modeling)is used to translate the code and its representation from mongoDB to nodejs sever.

//import mogoose module
const mongoose = require('mongoose');
// database
const mongoDB_URI = "mongodb+srv://syed:Syed%407875@cluster0.j9elohl.mongodb.net/webtechnical_db?retryWrites=true&w=majority";
mongoose.connect(process.env.mongoDB_URI || "mongodb://localhost:27017/webtechnical_db",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("connection successfull");
}).catch((error)=> console.log(`Mongoose connection error: ${error}`));