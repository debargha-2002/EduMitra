const mongoose = require("mongoose");
require("dotenv").config();

function dbConnect(){
    mongoose.connect(process.env.db_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{console.log("DB connection successful")})
    .catch((err)=>{console.log(err)
                   console.log("DB connection failed")
                   process.exit(1)})

}
module.exports = dbConnect
