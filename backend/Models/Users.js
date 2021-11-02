const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  Username: {
    type: String,
    required: true,
    unique:true,
  },
  Email: {
    type: String,
    required: true,
    unique:true,
  },
  Password: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true
  },
  FirstName:{
      type:String,
      required:true
  },
  LastName:{
    type:String,
    required:true
}
  
}, { timestamps: true });

const User = mongoose.model('User', User);
module.exports = User;