const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title: {
    type: String,
    required: true,
    unique: true
  },
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
  },
  ingredients: [String],
  cuisine: {
    type: String,
    required: true
  },
  dishType: {
    type: String,
    //this is not correct yet
    enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other']
  },
  image: {
    type: String,
    required: true,
    default: 'https://images.media-allrecipes.com/images/75131.jpg',
    // validate: {
    //   message: '',
    //   validator: value => {
    //     return value.toLowerCase() === value && value.includes('https://');
    //   }
    // }
  },
  duration: {
    type: Number,
    min: 0
  },
  creator: String,
  created: {
    type: Date,
    default: new Date()
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;