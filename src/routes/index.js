import express from "express";
import authRoute from "./auth.route.js";
import customerRoute from "./customer.route.js";
import refreshTokenRoute from "./refreshTokenRoute.route.js";
import textAuth from "./textAuth.route.js";
import {PATH_API} from "../constans/index.js";
import tokenAccessRegistryFromPOSRoute from "./tokenAccessRegistryFromPOS.route.js";

const BASE_URL = '/v1/api';
const router = express.Router();
router.use(`${BASE_URL}${PATH_API.CUSTOMER}`, customerRoute)
router.use(`${BASE_URL}/auth`, authRoute);
router.use(`${BASE_URL}/refresh-token`, refreshTokenRoute)
router.use(`${BASE_URL}/testAuth`, textAuth)
router.use(`${BASE_URL}${PATH_API.TOKEN_ACCESS_REGISTRY_FROM_POS}`, tokenAccessRegistryFromPOSRoute)
export default router;
