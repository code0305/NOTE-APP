import express from "express";
import { protectRoute } from "../middlewire/auth.middle_wire.js";
const router = express.Router();

// apply auth middleware to all routes
router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);
router.post("/friend-request/:id", sendFriendRequest);


export default router;
