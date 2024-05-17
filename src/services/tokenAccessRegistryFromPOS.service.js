import TokenAccessRegistryFromPOSModel from "../models/tokenAccessFromPOS.model.js";
import * as crypto from "crypto";

const secret = "pos-server-all";

class TokenAccessRegistryFromPOSService {
    static deleteOne = async ({token}) => {
        return await TokenAccessRegistryFromPOSModel.deleteOne({token}).lean().exec();
    }
    static deleteAll = async () => {
        return await TokenAccessRegistryFromPOSModel.deleteMany({}).lean().exec();
    }
    static addOne = async (data) => {
        const {address} = data;
        const hash = crypto.createHash('sha256', secret).update(new Date().toISOString()).digest('hex');
        return TokenAccessRegistryFromPOSModel.create({
            token: hash + '-' + address,
            address: address
        });
    }
    static getOne = async ({token}) => {
        return await TokenAccessRegistryFromPOSModel.findOne({token: token}).lean().exec();
    }
}

export default TokenAccessRegistryFromPOSService;

