//mongoose is used to create connection bet mongoDB and nodejs(expressjs)server.
//mongoose is ODM(object databse modeling)is used to translate the code and its representation from mongoDB to nodejs sever.

//import mogoose module
const mongoose = require('mongoose');
//set up default mongoose connection
mongoose.connect("mongodb://localhost:27017/my_db");
//get mongoose to use global promise library
mongoose.Promise = global.Promise;
//get the default connection
var db = mongoose.connection;

//connection Events
//when successfully connected
db.on("connected",function(){
    console.log("connection Succefull...");
});
//if connection throws an error
db.on("error", function(err){
      console.log(`mongoose connection error: ${err}`);
})
