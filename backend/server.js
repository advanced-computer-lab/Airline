import express from "express"
import cors from "cors"
import flights from "./api/flights.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/flights", flights)
app.use("*", (req, res)=> res.status(404).json({error:"not found"}))

export default app