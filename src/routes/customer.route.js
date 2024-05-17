import express from 'express';
import {PATH_API} from "../constans/index.js";
import CustomerController from "../controllers/customer.controller.js";
import {asyncHandleError} from "../helper/asyncHandleError.js";
import auth from "../middleware/auth.middlware.js";

const router = express.Router();

router.get(PATH_API.CUSTOMER_GET_ONE, auth, asyncHandleError(CustomerController.getOne));
router.post(PATH_API.CUSTOMER_ADD_ONE, auth, asyncHandleError(CustomerController.addOne));
export default router;
