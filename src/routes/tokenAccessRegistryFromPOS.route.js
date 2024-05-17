import express from 'express';
import {PATH_API} from "../constans/index.js";
import TokenAccessRegistryFromPOSController from "../controllers/tokenAccessRegistryFromPOS.controller.js";
import {asyncHandleError} from "../helper/asyncHandleError.js";
const router = express.Router();

router.post(PATH_API.TOKEN_ACCESS_REGISTRY_FROM_POS_ADD_ONE,asyncHandleError(TokenAccessRegistryFromPOSController.addOne));
router.delete(PATH_API.TOKEN_ACCESS_REGISTRY_FROM_POS_DEL_ONE,asyncHandleError(TokenAccessRegistryFromPOSController.deleteOne));
router.get(PATH_API.TOKEN_ACCESS_REGISTRY_FROM_POS_GET_ONE,asyncHandleError(TokenAccessRegistryFromPOSController.getOne));
export default router;
