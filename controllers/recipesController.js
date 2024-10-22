// import a recipe schema/model to be use to create a new recipe
import Recipe from "../models/recipe.js"

// async function with HTTP request and response for creating a new recipe and error handling 
const createItem = async (req,res)=>{
    try{
      const recipe = await Recipe.create(req.body)
      res.status(201).json(recipe)
    } catch (error){
      res.status(500).json({error:"an error occurred while creating a recipe",details: error.message})
    }
}

// endpoint to retrive recipes
const findrecipe = async (req,res)=>{
  try{
    const recipe = await Recipe.find()
    res.status(201).json(recipe)
  } catch (error){
    res.status(500).json({error:"an error occurred while fetching recipes",details: error.message})
  }
}

// find recipe by id
const findRecipeById = async (req,res)=>{
  const {id} = req.params;
  try{
    const recipe = await Recipe.findById(id);
    if (!recipe){
      return res.status(404).json({error: "Recipe not found"})
    }
    res.status(201).json(recipe)
  } catch (error){
    res.status(500).json({error:"an error occurred while fetching a recipe",details: error.message,validate: "please enter a valid id"})
  }
}

const deleteRecipeById = async (req,res)=>{
  const {id} = req.params;
  try{
    const recipe = await Recipe.findByIdAndDelete(id);
    if (!recipe){
      return res.status(404).json({error: "Recipe not found"})
    }
    res.status(201).json({message:"recipe deleted successfully",recipe})
  } catch (error){
    res.status(500).json({error:"an error occurred while fetching a recipe",details: error.message,validate: "please enter a valid id"})
  }
}

const updateRecipeById = async (req,res)=>{
  const {id} = req.params;
  const updateData = req.body;
  try{
    const recipe = await Recipe.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!recipe){
      return res.status(404).json({error: "Recipe not found"})
    }
    res.status(201).json({message:"recipe deleted successfully",recipe})
  } catch (error){
    res.status(500).json({error:"an error occurred while updating the recipe",details: error.message})
  }
}

export  { createItem, findrecipe,findRecipeById,deleteRecipeById,updateRecipeById  };