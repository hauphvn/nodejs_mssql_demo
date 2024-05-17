import StatusCodeInternal from "../core/statusCodeInternal.js";
import ReasonMessageInternal from "../core/reasonMessageInternal.js";
import dotEnv from "dotenv";
dotEnv.config();

const auth = async (req, res, next) => {
    const apiKey = req?.headers['x-api-key'];
    if (apiKey && apiKey === process.env.X_API_KEY) {
       next();
    } else {
        return res.status(StatusCodeInternal.FORBIDDEN).json({
            error: true,
            message: ReasonMessageInternal.FORBIDDEN
        });
    }
    // try{
    //     const privateKey = process.env.ACCESS_TOKEN_PRIVATE_KEY;
    //     const check = jwt.verify(token,privateKey);
    //     if(!check){
    //         return res.status(StatusCodeInternal.FORBIDDEN).json({
    //             error: true,
    //             message: ReasonMessageInternal.FORBIDDEN
    //         });
    //     }else{
    //         next();
    //     }
    // }catch (e) {
    //     return res.status(StatusCodeInternal.FORBIDDEN).json({
    //         error: true,
    //         message: ReasonMessageInternal.FORBIDDEN
    //     });
    // }
}

export default auth;
