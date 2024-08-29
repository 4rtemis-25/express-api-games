import express from "express";
import { pool } from "./db.js";
import gamesRoutes from "./routes/games.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express()

app.use(express.json())

app.use(gamesRoutes)
app.use(indexRoutes)

app.listen(3000)
