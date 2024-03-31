import mongoose from "mongoose"

const dbConnectPool = async () => {
  const conn = mongoose.createConnection()
  conn.openUri(process.env.MONGO_URL, {
    maxPoolSize: process.env.MONGO_POOLSIZE,
  })

  conn.on("open", () => console.log(`Database connected for transactions`))
  if (conn) {
    console.log("Connected to MongoDB")
  } else {
    console.log("Error Connecting to MOngoDB")
  }
}

export { dbConnectPool }
