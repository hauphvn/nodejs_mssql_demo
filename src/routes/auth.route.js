
import express from "express";
import AuthController from "../controllers/auth.controller.js";
import {PATH_API} from "../constans/index.js";
import {asyncHandleError} from "../helper/asyncHandleError.js";
const router = express.Router();
router.post(PATH_API.SIGN_UP, asyncHandleError(AuthController.signUp))
router.post(PATH_API.SIGN_IN, asyncHandleError(AuthController.signIn))
router.delete(PATH_API.SIGN_OUT, asyncHandleError(AuthController.signOut))
export default router;
