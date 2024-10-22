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

export default createItem;