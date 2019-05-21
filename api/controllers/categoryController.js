'use strict';

var mongoose = require('mongoose'),
   Category = mongoose.model('Categories');

//Add a category
exports.AddCategory = function(req, res) {
  var newCategory = new Category(req.body);
  newCategory.save(function(err, category) {
    if (err)
      res.send(err);
    let response = {
      'status': 'SUCCESS',
      'message': 'One Category added successfully'
    }
    res.json(response);
  });
};

//Get all categories with child categories
exports.GetAllCategories = function(req, res) {
  Category.find({}, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};