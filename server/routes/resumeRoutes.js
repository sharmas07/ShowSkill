import { Router } from "express";
import { commentResume, endorseResume, updateResume, uploadResume } from "../controllers/resumeController.js";
const router = Router();

router.post('/uploadresume', uploadResume)
router.put('/updateresume/:id', updateResume)
router.put('/endorse/:id', endorseResume)
router.put('/comment/:id', commentResume)


export default router;