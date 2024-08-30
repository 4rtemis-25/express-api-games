import { Router } from "express";
import { deleteGames, createGames, getGames, updateGames, getGamesById } from "../controllers/games.controller.js";

const router = Router()

router.get('/games', getGames)

router.post('/games', createGames)

router.get('/gamesById/:id', getGamesById)

router.patch('/games/:id', updateGames)

router.delete('/games/:id', deleteGames)

export default router