import { Router } from "express";
import { queryTest } from "../controllers/index.controller.js";

const router = Router()

router.get('/database', queryTest)

export default router
