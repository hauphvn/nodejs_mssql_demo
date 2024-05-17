import ResponseInternal from "../core/responseInternal.js";
import ReasonMessageInternal from "../core/reasonMessageInternal.js";
import TokenAccessRegistryFromPOSService from "../services/tokenAccessRegistryFromPOS.service.js";
import StatusCodeInternal from "../core/statusCodeInternal.js";

class TokenAccessRegistryFromPOSController {
    getOne = async (req, res) => {
        const {token} = req.query;
        new ResponseInternal({
            message: ReasonMessageInternal.OK,
            metadata: await TokenAccessRegistryFromPOSService.getOne({token}),
            statusCode: StatusCodeInternal.OK
        }).send(res);
    }
    addOne = async (req, res) => {
        const data = req.body || null;
        new ResponseInternal({
            message: ReasonMessageInternal.CREATED,
            metadata: await TokenAccessRegistryFromPOSService.addOne(data),
            statusCode: StatusCodeInternal.CREATED
        }).send(res);
    }
    deleteOne = async (req, res) => {
        const {token} = req.query;
        new ResponseInternal({
            message: ReasonMessageInternal.OK,
            metadata: await TokenAccessRegistryFromPOSService.deleteOne({token}),
            statusCode: StatusCodeInternal.OK
        }).send(res);
    }
}

export default new TokenAccessRegistryFromPOSController();
