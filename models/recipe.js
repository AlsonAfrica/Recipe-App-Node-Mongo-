import mongoose from "mongoose";

// Define schema
const recipesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        ingredients: [
            {
                name: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: String, // Optional field for ingredient quantity
                    required: false
                }
            }
        ],
        instructions: {
            type: String,
            required: true
        },
        preparationTime: {
            type: String,
            required: true
        },
        servings: {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        category: {
            type: String,
            required: true
        }
    }
);

// Model represents the 'Recipes' collection
const Recipe = mongoose.model('Recipe', recipesSchema);

export default Recipe;
