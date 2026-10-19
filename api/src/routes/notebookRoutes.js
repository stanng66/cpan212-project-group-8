import {Router} from "express";
import {createNotebookEntry, getNotebookEntries} from "../controllers/notebookController.js";

const router=Router();

router.get("/",getNotebookEntries);

router.post("/",createNotebookEntry);

export default router;