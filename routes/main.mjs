import { Router } from "express";
import { streamController } from "../controllers/main.mjs";

const router = Router()

router.get("/stream", streamController)

export default router