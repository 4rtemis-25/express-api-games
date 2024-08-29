import { Router } from "express";
import { deleteGames, createGames, getGames, updateGames, getGamesById } from "../controllers/games.controller.js";

const router = Router()

router.get('/games', getGames)

router.get('/gamesById/:id', getGamesById)

router.put('/games', updateGames)

router.delete('/games', deleteGames)

export default router