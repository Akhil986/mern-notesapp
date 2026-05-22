import express from "express"
import { createANote,getAllnotes,updateNote,deleteNote, getnotebyID } from "../controllers/notesController.js";
const router = express.Router();

router.get("/",getAllnotes);
router.get("/:id",getnotebyID);
router.post("/",createANote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);
export default router;