import express from "express";
import * as tc from "../controllers/taskController.js";

const router = express.Router();

router.get("/tasks", tc.getAll);
router.post("/tasks", tc.create); 
router.patch("/tasks/:id", tc.update);
router.delete("/tasks/:id", tc.remove);

export default router;
