import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cors from "cors"
import { dbConnectPool } from "./utilities/dbConnectPool.js"
import { ExpRouter } from "./routes/ExpRouter.js"

dotenv.config({ path: "../.env" })

const PORT = process.env.BACKEND_PORT || "3500"
// Initialize the  express app
const app = express()

// Include middleware for reading json and body information

app.use(express.json())
app.use(cors())
app.use(urlencoded({ extended: true }))

// Import Application Routes middleware

app.use(ExpRouter)

// Connect to MongoDB  database
await dbConnectPool()

// Start the server and listen

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))
