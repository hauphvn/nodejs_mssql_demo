import ResponseInternal from "../core/responseInternal.js";
import ReasonMessageInternal from "../core/reasonMessageInternal.js";
import CategoryService from "../services/category.service.js";
import StatusCodeInternal from "../core/statusCodeInternal.js";

class CategoryController {
    getByStatus = async (req, res) => {
        const {status} = req.query;
        new ResponseInternal({
            message: ReasonMessageInternal.OK,
            metadata: await CategoryService.getByStatus(status),
            statusCode: StatusCodeInternal.OK
        }).send(res);
    }
    addBulk = async (req, res) => {
        const data = req.body || null;
        new ResponseInternal({
            message: ReasonMessageInternal.CREATED,
            metadata: await CategoryService.addNewBulk(data),
            statusCode: StatusCodeInternal.CREATED
        }).send(res);
    }
}

export default new CategoryController();
