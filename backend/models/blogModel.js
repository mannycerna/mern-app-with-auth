//import mongoose library
const mongoose = require("mongoose");


//create a blogSchema
const blogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
      title: {
        type: String,
        required: [true, 'Please add a  title'],
      },
      text: {
        type: String,
        required: [true, 'Please add a blog details'],
      },
      author: {
        type: String,
        required: [true, 'Please add an  author'],
      },
      year: {
        type: Number,
        required: [true, 'Please add a number'],
      },
      categories: {
        type: [String],
      }
    },
    
    {
      timestamps: true,
    }
    
);

//register model to collection & make  model accessible to outside files
module.exports = mongoose.model("Blog", blogSchema);


