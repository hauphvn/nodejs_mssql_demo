'use strict';
import UserModel from '../models/user.model.js';
import {BadRequestError} from "../core/error.response.js";
import {CODE_BE, MSG_BE} from "../constans/index.js";
import bcrypt from 'bcrypt';
import generateTokens from "../helper/generateToken.js";
import UserTokenModel from "../models/userToken.model.js";

class AuthService {
    static signUp = async (input) => {
        const {phone, password} = input;
        const userExists = await UserModel.findOne({phone: phone}).lean().exec();
        if (userExists) throw new BadRequestError({code: CODE_BE.PHONE_EXISTS});
        const pwdHash = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({
            phone,
            password: pwdHash
        });
        if (!newUser) throw new BadRequestError({code: CODE_BE.WRONG_CREATE_USER});
        return MSG_BE.CREATE_USER_SUCCESS;
    }

    static signIn = async (input) => {
        const {phone, password} = input;
        const userHolder = await UserModel.findOne({phone: phone}).lean().exec();
        if (!userHolder) throw new BadRequestError({code: CODE_BE.PHONE_NOT_EXISTS});
        const matchPassword = await bcrypt.compare(password, userHolder.password);
        if (!matchPassword) throw new BadRequestError({code: CODE_BE.WRONG_PASS});
        // Generate access and refresh token
        const {accessToken, refreshToken} = await generateTokens(userHolder);
        return {accessToken, refreshToken};
    }

    static signOut = async(refreshToken) => {
        const result =  await UserTokenModel.deleteOne({token: refreshToken}).exec();
        if(result && result?.deletedCount > 0) {
            return MSG_BE.SIGN_OUT_SUCCESS;
        }else{
            return null;
        }
    }
}

export default AuthService;
