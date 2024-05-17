import UserTokenModel from "../models/userToken.model.js";
import {CODE_BE, MSG_BE} from "../constans/index.js";
import jwt from "jsonwebtoken";

const verifyRefreshToken = async (refreshToken) => {
    const privateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY;
    const result = await UserTokenModel.findOne({token: refreshToken}).exec();
    if (!result){
        return {
            error: true,
            message: MSG_BE.WRONG_REFRESH_TOKEN,
            code: CODE_BE.WRONG_REFRESH_TOKEN
        }
    }
    return jwt.verify(refreshToken, privateKey);

}
export default verifyRefreshToken;
