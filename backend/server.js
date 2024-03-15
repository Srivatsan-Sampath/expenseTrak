import express, { urlencoded } from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config({ path: "../.env" })

const app = express()
const PORT = process.env.BACKEND_PORT || "3500"

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors())

app.listen(() => {
  console.log(`Server listening on port ${PORT}`)
})
