import express from 'express';
import auth from "../middleware/auth.middlware.js";
import AuthTestController from '../controllers/testAuth.controller.js';
const router = express.Router();
router.get('/',auth,AuthTestController.testAuth);
export default router;
