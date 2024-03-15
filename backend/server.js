import express from "express"

import dotenv from "dotenv"

dotenv.config({ path: "../.env" })

const PORT = process.env.BACKEND_PORT || "3500"

const app = express()

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))
