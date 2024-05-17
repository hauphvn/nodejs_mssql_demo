import jwt from 'jsonwebtoken';
import UserTokenModel from "../models/userToken.model.js";

 const generateTokens = async (user) => {
    try {

        const payload = {
            _id: user._id,
            roles: user.roles,
            fullName: user.fullName
        }
        const accessToken = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_PRIVATE_KEY,
            {expiresIn: '2d'} //14m: 14 minutes
        )
        const refreshToken = jwt.sign(
            payload,
            process.env.REFRESH_TOKEN_PRIVATE_KEY,
            {expiresIn: '30d'}
        )
        const userToken = await UserTokenModel.findOne({userId: user._id});
        if (userToken) {
            await UserTokenModel.deleteOne({_id: userToken._id});
        }
        await UserTokenModel.create({userId: user._id, token: refreshToken});
        return Promise.resolve({accessToken, refreshToken});
    } catch (e) {
        return Promise.reject(e);
    }
}
export default generateTokens;
