import { Router } from "express";
import { updateResume, uploadResume } from "../controllers/resumeController.js";
const router = Router();

router.post('/uploadresume', uploadResume)
router.post('/updateresume/:id', updateResume)


export default router;