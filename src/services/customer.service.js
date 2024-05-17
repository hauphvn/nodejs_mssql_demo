import {Database} from "../dbs/init.mssql.js";
import {CODE_BE, CUSTOMER_STATUS} from "../constans/index.js";

class CustomerService {
    static getOne = async ({id}) => {
        try {
            const pool = await Database.getConnection();
            const result = await pool.request()
                .input('id', id)
                .query("SELECT * FROM demo_customer WHERE id = @id");
            return (result.recordset[0]);
        } catch (error) {
           return {error: error};
        }

    }
    static getAll = async () => {
        try {
            const pool = await Database.getConnection();
            const result = await pool.request().query("SELECT * FROM demo_customer");
            return (result.recordset);
        } catch (error) {
           return {error: error};
        }
    }
    static addOne = async (data) => {
        try {
            const pool = await Database.getConnection();
            const result = await pool.request()
                .input('name', data.name)
                .input('email', data.email)
                .input('address', data.address)
                .input('phone_number', data.phoneNumber)
                .input('status', CUSTOMER_STATUS.PENDING)
                .query("INSERT INTO demo_customer (name, email, address, phone_number, status) VALUES (@name, @email, @address, @phone_number, @status)");
            return ({
                statusCode: !!result.rowsAffected ? 201 : 400,
            });
        } catch (error) {
            if (error?.originalError && error?.originalError.info && error?.originalError.info.number === 2627) {
                return {
                    error: error,
                    statusCode: CODE_BE.USER.EMAIL_EXISTS
                };
            }
            return {
                error: error,
                statusCode: CODE_BE.USER.WRONG_CREATE_USER
            };
        }
    }
}

export default CustomerService;

