'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
  Id: {
    type: String,
    required: 'Kindly enter the id of the product'
  },
  Title: {
    type: String,
    required: 'Kindly enter the title of the product'
  },
  Category: {
    type: String,
    required: 'Kindly enter the category of the product'
  },
  SubCategory: {
    type: String,
    required: 'Kindly enter the subcategory of the product'
  },
  Manufacturer: {
    type: String,
    required: 'Kindly enter the manufaturer of the product'
  },
  Contents: {
    type: String,
    required: 'Kindly enter the contents of the product'
  },
  Description: {
    type: String,
    required: 'Kindly enter the description of the product'
  },
  Organic: {
    type: String,
    required: 'Kindly enter the product is organic or not(true/false)'
  },
  ImageUrl: {
    type: String,
    required: 'Kindly enter the image url of the product'
  },
  OrgPrice: {
    type: Number,
    required: 'Kindly enter the original price of the product'
  },
  Price: {
    type: Number,
    required: 'Kindly enter the price of the product'
  },
  Created_date: {
    type: Date,
    default: Date.now
  } 
});

module.exports = mongoose.model('Products', ProductSchema);