import { Router } from "express";
import { registerUser,verifyEmail,loginUser,checkaccount,logoutUser } from "./user.controller.js";

const router = Router();

//routers for user verification
router.post('/register', registerUser);
router.get('/verify/:token',verifyEmail);
router.post('/login', loginUser);
router.get('/profile', checkaccount);
router.post('/logout', logoutUser);

export default router;