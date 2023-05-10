const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Alan:HailedSquare881@alan.rbrdfgi.mongodb.net/controlLaptops?retryWrites=true&w=majority")
.then((result) => {
    console.log("CONNECTED TO MONGO ATLAS")
}).catch((err) => {
    console.err(err)
});