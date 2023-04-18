const mongoose = require("mongoose")
const { Schema } = mongoose;

const PropertySchema = new Schema({
  address: {type:String, required: true},
    price: {type:Number, required: true},
    type: {type:String, required: true},
    images: [
      {type:String, required: true},
      {type:String},
    ]
});


module.exports = new mongoose.model('Property', PropertySchema);

