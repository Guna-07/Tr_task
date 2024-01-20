const Task = require('../models/products');

exports.getAllProducts = async (req, res, next) => {
  try {
    const [allProducts] = await Task.fetchAll();
    res.status(200).json(allProducts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postProducts = async (req, res, next) => {
  try {
    const postResponse = await Task.post(req.body.item_name,req.body.price);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// exports.putTasks = async (req, res, next) => {
//   try {
//     const putResponse = await Task.update(req.body.id, req.body.item);
//     res.status(200).json(putResponse);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

// exports.deleteTasks = async (req, res, next) => {
//   try {
//     const deleteResponse = await Task.delete(req.params.id);
//     res.status(200).json(deleteResponse);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };
