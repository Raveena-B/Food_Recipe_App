const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const recipeSchema = new Schema({

    Id : {
        type : Number,
        requied: true
    },

    recipename :{
        type :String,
        required :true
    },

    ingredients : {
        type : String,
        require :true
    },

    description : {
        type : String,
        require :true
    },

    
})

const Recipe = mongoose.model("Recipe",recipeSchema);

module.exports = Recipe;