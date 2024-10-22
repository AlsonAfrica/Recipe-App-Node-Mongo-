import mongoose from "mongoose";

// Define schema
const recipesSchema = new mongoose.Schema(
    
    {
    name:{type:String, required:true},
    ingredients:[{
        type:String,
        name: String,
        required: true
    }],
    instructions:{
        type:String,
        required:true
    },
    preparationTime:{
        type:String,
        required:true
    },
    servings:{
       type: String,
       required:true,
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    category:{
        type:String,
        required:true
    }
}

)
// Model defined a class that represents a collection table (collection), with the name Recipe as the collections name and export the recipes schema
const Recipe = mongoose.model('Recipe',recipesSchema)
export default Recipe;

