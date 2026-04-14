import { Router } from "express";
import { registerUser,verifyEmail,loginUser } from "./user.controller.js";

const router = Router();

//routers for user verification
router.post('/register', registerUser);
router.get('/verify/:token',verifyEmail);
router.post('/login', loginUser);


export default router;