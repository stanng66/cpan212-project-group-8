import {Router} from "express";
import {createNotebookEntry, getNotebookEntries, getNotebookEntryById} from "../controllers/notebookController.js";
import { validateNotebookEntry } from "../validators/notebookValidator.js";
const router=Router();

router.get("/",getNotebookEntries);

router.post("/", validateNotebookEntry, createNotebookEntry);

router.get("/:id", getNotebookEntryById);
export default router;