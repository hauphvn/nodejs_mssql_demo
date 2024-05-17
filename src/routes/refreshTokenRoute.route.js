import express  from "express";
import {PATH_API} from "../constans/index.js";
import RefreshTokenController from "../controllers/refreshToken.controller.js";
const router = express.Router();
router.post(PATH_API.REFRESH_TOKEN,RefreshTokenController.verify);

export default router;
