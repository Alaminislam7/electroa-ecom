const express = require("express");
const categoryController = require("../controllers/categoryController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(categoryController.createCategory)
  .get(categoryController.getAllCategories);
  
router
    .route("/:slug")
    .get(categoryController.getCategory)
    .put(categoryController.updateCategory)
    .delete(categoryController.removeCategory)

module.exports = router;
