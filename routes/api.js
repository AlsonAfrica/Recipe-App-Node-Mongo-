import express from "express"
import {createItem,findrecipe,findRecipeById,deleteRecipeById,updateRecipeById  } from "../controllers/recipesController.js"

const router = express.Router()

// Route for creating a new recipe
router.post('/recipe', createItem)

// Route for retrieving all recipes
router.get('/recipe',findrecipe)

// Route for retrieving a recipe by ID
router.get('/recipe/:id',findRecipeById)

// Route for deleting a recipe by ID
router.delete("/recipe/:id",deleteRecipeById)

// Route for updating a recipe by ID
router.put("/recipe/:id",updateRecipeById )


export default router