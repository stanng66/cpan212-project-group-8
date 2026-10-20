import {Router} from "express";
import {createNotebookEntry, getNotebookEntries, getNotebookEntryById, updateNotebookEntry, deleteNotebookEntry} from "../controllers/notebookController.js";
import { validateNotebookEntry } from "../validators/notebookValidator.js";
const router=Router();

router.get("/",getNotebookEntries);

router.post("/", validateNotebookEntry, createNotebookEntry);
router.put("/:id", validateNotebookEntry, updateNotebookEntry);
router.get("/:id", getNotebookEntryById);

router.delete("/:id", deleteNotebookEntry);

export default router;