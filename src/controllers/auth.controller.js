'use strict';
import ResponseInternal from "../core/responseInternal.js";
import StatsCode from '../core/statusCodeInternal.js';
import Reason from '../core/reasonMessageInternal.js';
import AuthService from "../services/auth.service.js";
import  {loggingIp} from "../logger.js";

class AuthController {
    signUp = async (req, res) => {
        loggingIp('Sign up ', req?.ip);
        const input = {
            phone: req.body.phone,
            password: req.body.password
        }
        new ResponseInternal({
            message: Reason.CREATED,
            metadata: await AuthService.signUp(input),
            statusCode: StatsCode.CREATED
        }).send(res);
    }

    signIn = async (req, res) => {
        loggingIp('Sign in ', req?.ip);
        const input = {
            phone: req.body.phone,
            password: req.body.password,
        }
        new ResponseInternal({
            message: Reason.OK,
            metadata: await AuthService.signIn(input),
            statusCode: StatsCode.OK
        }).send(res);
    }

    signOut = async (req,res) => {
        const {refreshToken} = req.body;
        new ResponseInternal({
            message: Reason.Ok,
            metadata: await AuthService.signOut(refreshToken),
            statusCode: StatsCode.OK
        }).send(res);
    }
}

export default new AuthController();
