import express from "express"
import createItem from "../controllers/recipesController.js"

const router = express.Router()

router.post('/recipe', createItem)

export default router