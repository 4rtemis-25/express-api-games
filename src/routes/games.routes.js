import { Router } from "express";
import { deleteGames, createGames, getGames, updateGames } from "../controllers/games.controller.js";

const router = Router()

router.get('/games', getGames)

router.post('/games', createGames)

router.put('/games', updateGames)

router.delete('/games', deleteGames)

export default router