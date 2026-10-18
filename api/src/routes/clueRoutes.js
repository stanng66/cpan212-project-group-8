import express from "express";

import {
    getClues,
    getClueById,
    createClue,
    updateClue,
    deleteClue
} from "../controllers/clueController.js";

const router = express.Router();

router.get("/", getClues);
router.get("/:id", getClueById);
router.post("/", createClue);
router.put("/:id", updateClue);
router.delete("/:id", deleteClue);

export default router;
