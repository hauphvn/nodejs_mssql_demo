import verifyRefreshToken from "../helper/verifyRefreshToken.js";
import jwt from "jsonwebtoken";
import ResponseInternal from "../core/responseInternal.js";
import ReasonMessageInternal from "../core/reasonMessageInternal.js";
import StatusCodeInternal from "../core/statusCodeInternal.js";
import RefreshTokenService from "../services/refreshToken.service.js";

class RefreshTokenController {
    verify = async (req, res) => {
        const {refreshToken} = req.body;
        new ResponseInternal({
            message: ReasonMessageInternal.OK,
            metadata: await RefreshTokenService.verify(refreshToken),
            statusCode: StatusCodeInternal.OK
        }).send(res);
    }
}
export default new RefreshTokenController();
