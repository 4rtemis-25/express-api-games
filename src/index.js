import express from "express";
import { pool } from "./db.js";
import gamesRoutes from "./routes/games.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api/v1', gamesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Ruta no encontrada'
    })
})

app.listen(3000)
