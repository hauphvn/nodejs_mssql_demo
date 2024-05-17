import ResponseInternal from "../core/responseInternal.js";
import StatusCodeInternal from "../core/statusCodeInternal.js";
import ReasonMessageInternal from "../core/reasonMessageInternal.js";

class AuthTestController {
    testAuth = async(req, res) => {
        new ResponseInternal({statusCode: StatusCodeInternal.OK,metadata: null, message: ReasonMessageInternal.OK}).send(res);
    }
}

export default new AuthTestController();
