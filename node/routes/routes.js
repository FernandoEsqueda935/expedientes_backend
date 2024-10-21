import express from "express";
import { createExpediente } from "../controllers/ExpedienteController.js";
const router = express.Router();

router.post("/", createExpediente);

export default router;