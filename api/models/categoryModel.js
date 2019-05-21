'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorySchema = new Schema({  
  title: {
    type: String,
    required: 'Kindly enter the title of the category'
  },
  id: {
    type: String,
    required: 'Kindly enter the id of the category'
  },
  description: {
    type: String,
    required: 'Kindly enter the description of the category'
  },
  child_categories: {
    type: [{
      title: {
        type: String,
        required: 'Kindly enter the title of the child category'
      },
      id: {
        type: String,
        required: 'Kindly enter the id of the child category'
      },
      description: {
        type: String,
        required: 'Kindly enter the description of the child category'
      }
    }]
  },
  Created_date: {
    type: Date,
    default: Date.now
  } 
});

module.exports = mongoose.model('Categories', CategorySchema);