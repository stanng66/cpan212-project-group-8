import {Router} from "express";
import {createNotebookEntry, getNotebookEntries, getNotebookEntryById, updateNotebookEntry} from "../controllers/notebookController.js";
import { validateNotebookEntry } from "../validators/notebookValidator.js";
const router=Router();

router.get("/",getNotebookEntries);

router.post("/", validateNotebookEntry, createNotebookEntry);
router.put("/:id", validateNotebookEntry, updateNotebookEntry);
router.get("/:id", getNotebookEntryById);
export default router;