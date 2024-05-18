const mongoose = require('mongoose');
const Article = require('../models/articleModel');
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
    console.log('working...')
    await Article.deleteMany({})

  for (let i = 0; i < 20; i++) {
    let article
    if (i % 4 === 0 ) {
         article = new Article({
            title: 'Article',
            author: 'author',
            category: categories[0], // Store category information
            content:'alot has happened',
            img: 'https://img.freepik.com/free-vector/blue-breaking-news-tv-background_1017-14201.jpg?size=626&ext=jpg',
        }
        )
        const category = await Category.findOne({category: categories[0]});
        category.articles.push(article);
        category.save()
    }
    else if (i % 4 === 1){
        article = new Article({
            title: 'Article',
            author: 'author',
            category: categories[1], // Store category information
            content:'alot has happened',
            img: 'https://img.freepik.com/free-vector/blue-breaking-news-tv-background_1017-14201.jpg?size=626&ext=jpg',
        })
        const category = await Category.findOne({category: categories[1]});
        category.articles.push(article);
        category.save()
    }
    else if (i % 4 === 2){
        article = new Article({
            title: 'Article',
            author: 'author',
            category: categories[2], // Store category information
            content:'alot has happened',
            img: 'https://img.freepik.com/free-vector/blue-breaking-news-tv-background_1017-14201.jpg?size=626&ext=jpg',
        })
        const category = await Category.findOne({category: categories[2]});
        category.articles.push(article);
        category.save()
    }
    else if (i % 4 === 3){
        article = new Article({
            title: 'Article',
            author: 'author',
            category: categories[3], // Store category information
            content:'alot has happened',
            img: 'https://img.freepik.com/free-vector/blue-breaking-news-tv-background_1017-14201.jpg?size=626&ext=jpg',
        })
        const category = await Category.findOne({category: categories[3]});
        category.articles.push(article);
        category.save()
    }
    console.log('element: ' + i)
    await article.save();
  }
  console.log('done working...');
}
