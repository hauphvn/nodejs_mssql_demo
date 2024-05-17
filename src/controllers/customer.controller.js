import ResponseInternal from "../core/responseInternal.js";
import ReasonMessageInternal from "../core/reasonMessageInternal.js";
import CustomerService from "../services/customer.service.js";
import StatusCodeInternal from "../core/statusCodeInternal.js";
import {schemaCustomerRegistry} from "../utils/validateJOI.js";

class CustomerController {
    getOne = async (req, res) => {
        const {id} = req.params;
        new ResponseInternal({
            message: ReasonMessageInternal.OK,
            metadata: await CustomerService.getOne({id}),
            statusCode: StatusCodeInternal.OK
        }).send(res);
    }
    addOne = async (req, res) => {
        const payload = req?.body;
        const {error} = schemaCustomerRegistry.validate(payload);
        if (error) {
            new ResponseInternal({
                message: ReasonMessageInternal.NOT_FOUND,
                metadata: error.details[0].message,
                statusCode: StatusCodeInternal.NOT_FOUND
            }).send(res);
        } else {
            new ResponseInternal({
                message: ReasonMessageInternal.OK,
                metadata: await CustomerService.addOne(payload),
                statusCode: StatusCodeInternal.OK
            }).send(res);
        }

    }
}

export default new CustomerController();
