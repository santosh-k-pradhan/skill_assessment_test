'use strict';
module.exports = function(app) {
  var product = require('../controllers/productController'),
    category = require('../controllers/categoryController');

  //Add acategory
  app.route('/addCategory').post(category.AddCategory);

  //Add product mapped to a category or categories
  app.route('/addProduct').post(product.AddProduct);

  //Get all categories with all its child categories mapped to it.
  app.route('/getAllCategories').get(category.GetAllCategories);

  //Get all products by a category
  app.route('/getAllProductsByCategory').get(product.GetAllProductsByCategory);

  //Update product details
  app.route('/updateProductDetails/:productId').put(product.UpdateProductDetails);
};