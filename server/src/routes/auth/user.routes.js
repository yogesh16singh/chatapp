import { Router } from "express";
import passport from "passport";
import { UserRolesEnum } from "../../constants.js";
import { registerUser } from "../../controllers/auth/user.controllers.js";

import "../../passport/index.js"; // import the passport config

const router = Router();
// Unsecured route
router.route("/register").post(registerUser);

export default router;
