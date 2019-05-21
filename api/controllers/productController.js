'use strict';

var mongoose = require('mongoose'),
  Product = mongoose.model('Products');

//Add a product
exports.AddProduct = function(req, res) {
  var newProduct = new Product(req.body);
  newProduct.save(function(err, product) {
    if (err)
      res.send(err);
    let response = {
      'status': 'SUCCESS',
      'message': 'One product added successfully'
    }
    res.json(response);
  });
};

//Get all products by a category
exports.GetAllProductsByCategory = function(req, res) {
  Product.find(req.body, function(err, product) {
    if (err) {
      res.send(err);
    } else if (product === null || product.length === 0) {
      let response = {
        'status': 'SUCCESS',
        'message': 'No Records Found'
      }
      res.json(response);
    }
    res.json(product);
  });
};

//Update Product Details
exports.UpdateProductDetails = function(req, res) {
  Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    let response = {
      'status': 'SUCCESS',
      'message': 'One product updated'
    }
    res.json(response);
  });
};
