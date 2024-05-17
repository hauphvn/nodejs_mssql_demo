import verifyRefreshToken from "../helper/verifyRefreshToken.js";
import jwt from "jsonwebtoken";

class RefreshTokenService {
    static verify = async (refreshToken) => {
        const result = await verifyRefreshToken(refreshToken);
            if (result) {
                const payload = {
                    _id: result._id,
                    roles: result.roles,
                    fullName: result.fullName
                }

                const accessToken = jwt.sign(
                    payload,
                    process.env.ACCESS_TOKEN_PRIVATE_KEY,
                    {expiresIn: '14m'}
                )
                return {
                    accessToken
                }
            }else{
                return null;
            }
    }
}

export default RefreshTokenService;
