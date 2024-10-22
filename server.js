// Server file to connect node with mongo
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config"
import ConnectDB from "./config/database.js";
import router from "./routes/api.js";

const app = express();

// Export server 
const PORT = process.env.PORT || 5005


// enabling cors for all origins
app.use(cors());
// handles incoming json data
app.use(express(express.json()));
app.use('/api/v1', router)
// import async function to connect db with node
ConnectDB()



app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))
