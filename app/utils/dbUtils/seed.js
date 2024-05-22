const mongoose = require('mongoose');
const Category = require('../models/CategoryModel');
const categories = ["تحليلات","مصورة", "محلي", "دولي"];

main()
  .then(() => SeedDB())
  .then(() => {
    mongoose.connection.close();
    console.log('closed connection');
  })
  .catch(err => console.log(err));

async function main() {
  if (mongoose.connection.readyState === 1) {
    console.log('already connected');
    return;
  }
  try {
    await mongoose.connect('mongodb+srv://news:Gz6UKzlkQx9Aviof@cluster0.cbzfmvt.mongodb.net/news?retryWrites=true&w=majority');
    console.log('connected db');
  } catch (error) {
    console.log('error connecting');
    throw new Error(error.message);
  }
}

async function SeedDB() {
  await Category.deleteMany({})
  for (const category of categories) {
    const newCategory = new Category({ category });
    await newCategory.save();
  }
}
