const mongoose = require("mongoose");
const {
  ObjectId
} = mongoose.Schema;

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
    text: true,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000,
    text: true,
  },
  details: {
    type: String,
    required: true,
    maxlength: 3000,
    text: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    maxlength: 32,
  },
  discount: {
    type: Number,
    trim: true,
    maxlength: 32,
  },
  category: {
    type: ObjectId,
    ref: "Category",
  },
  quantity: Number,

  excerpt: {
    type: String,
    max: 1000
  },
  mtitle: {
    type: String,
  },
  mdesc: {
    type: String,
  },

  color: {
    type: String,
    enum: ["Black", "Brown", "Silver", "White", "Blue"],
  },
  ratings: [{
    star: Number,
    postedBy: {
      type: ObjectId,
      ref: "User"
    },
  }],
  sold: {
    type: Number,
    default: 0,
  },
  images: {
    type: Array,
  },
  sizes: {
    type: Array,
  },
}, {
  timestamps: true
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;