import express from "express";

import {
    getClues,
    getClueById,
} from "../controllers/clueController.js";

const router = express.Router();

router.get("/", getClues);
router.get("/:id", getClueById);

export default router;
