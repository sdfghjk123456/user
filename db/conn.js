const mongoose = require("mongoose");

const DB = "mongodb+srv://lakuntlanaveen:svyxPYCRJbZvKxd0@cluster0.eswbzeg.mongodb.net/recovery?retryWrites=true&w=majority&appName=Cluster0"

// const DB = process.env.DATABASE

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})