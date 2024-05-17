import Joi from "joi";

const schemaCustomerRegistry = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    address: Joi.string().min(3).max(200).required(),
    phoneNumber: Joi.string().alphanum().required(),
});

export {schemaCustomerRegistry}
