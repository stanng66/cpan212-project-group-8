import express from "express";

import {
    getClues,
    getClueById,
    createClue,
    updateClue,
    deleteClue,
    getArtworkById,
    getClueArtworkImage
} from "../controllers/clueController.js";

const router = express.Router();

router.get("/", getClues);
router.get("/:id", getClueById);
router.post("/", createClue);
router.put("/:id", updateClue);
router.delete("/:id", deleteClue);
router.get("/artwork/:id", getArtworkById);
router.get("/artwork/image/:imageId", getClueArtworkImage);

export default router;
