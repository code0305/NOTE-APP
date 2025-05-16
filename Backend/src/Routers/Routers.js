import express from "express";

import { login, logout,onboard, signup } from "../Controller/Controller.js";// following operation
import { protectRoute } from "../middlewire/auth.middle_wire.js";


const router = express.Router();

router.post("/signup", signup);//accesing based on path
router.post("/login", login);
router.post("/logout", logout);
router.post("/onboarding", protectRoute, onboard);

router.get("/me", protectRoute, (req, res) => {
    res.status(200).json({ success: true, user: req.user });
  });


export default router;