import express from "express"

import streamRoutes from "./routes/main.mjs"

const app = express()

app.use("/api/v1", streamRoutes)

const PORT = process.env.PORT || 5002

app.listen(PORT, () => console.log(`server running on port ${PORT}`))