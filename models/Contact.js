const mongoose= require ("mongoose")
const Schema= mongoose.Schema
// create Schema

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,



    
    required: true
  },

  phoneNumber: {
    type: Number,
    required: true
  }
});

module.exports= Contact=mongoose.model('contact', ContactSchema)