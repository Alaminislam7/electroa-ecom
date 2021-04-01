const Product = require('../models/Product');
const catchAsync = require("../utils/catchAsync");
const slugify = require("slugify");
const smartTrime = require("../utils/product.js")
const dotenv = require("dotenv");


dotenv.config({
  path: "./config.env"
});


exports.createProduct = catchAsync(async (req, res) => {
  let {
    title,
    description
  } = req.body

  req.body.slug = slugify(title).toLowerCase();
  req.body.excerpt = smartTrime(description, 320, ' ', ' ...');
  req.body.mtitle = `${title} | ${process.env.APP_NAME}`;
  req.body.mdesc = smartTrime(description, 150, ' ', ' ');

  const newProduct = await new Product(req.body).save();
  res.json(newProduct)
})

exports.updateProduct = catchAsync(async (req, res) => {
  let {
    title,
    description
  } = req.body

  if (title) {
    req.body.slug = slugify(title).toLowerCase();
    req.body.mtitle = `${title} | ${process.env.APP_NAME}`;
  }
  if (description) {
    req.body.excerpt = smartTrime(description, 320, ' ', ' ...');
    req.body.mdesc = smartTrime(description, 150, ' ', ' ');
  }

  const updated = await Product.findOneAndUpdate({
    slug: req.params.slug
  }, req.body, {
    new: true
  }).exec();

  res.json(updated)

})

exports.getAllProduct = async (req, res) => {
  let products = await Product.find({})
    .sort([
      ["createdAt", "desc"]
    ])
    .populate("category")
    .exec();
  res.json(products);
}

exports.getProduct = async (req, res) => {
  const product = await Product.findOne({
      slug: req.params.slug
    })
    .populate("category")
    .exec();

  res.json(product);
}