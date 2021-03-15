const catchAsync = require("./../utils/catchAsync");
const Category = require("../models/Category");
const AppError = require("./../utils/appError");
const slugify = require("slugify");

exports.createCategory = catchAsync(async (req, res) => {
  const { name } = req.body;

  res.json(await new Category({ name, slug: slugify(name) }).save());
});

exports.getAllCategories = catchAsync(async (req, res) => {
  res.json(await Category.find({}).sort({ createdAt: -1 }).exec());
});

exports.getCategory = catchAsync(async (req, res, next) => {
  let category = await Category.findOne({ slug: req.params.slug }).exec();

  if (!category) {
    return next(new AppError("No document found with that SLUG", 404));
  }

  res.json({
    category,
  });
});

exports.updateCategory = catchAsync(async (req, res, next) => {
  const { name } = req.body;

  const updated = await Category.findOneAndUpdate(
    { slug: req.params.slug },
    { name, slug: slugify(name) },
    { new: true }
  );

  if (!updated) {
    return next(new AppError("No document found with that SLUG", 404));
  }

  res.json(updated);
});

exports.removeCategory = catchAsync(async (req, res, next) => {
  const deleted = await Category.findOneAndDelete({ slug: req.params.slug });

  if (!deleted) {
    return next(new AppError("No document found with that SLUG", 404));
  }

  res.json(deleted);
});
