'use strict';

import StatsCode from './statusCodeInternal.js';
import Reason from './reasonMessageInternal.js';

class ErrorResponse extends Error {

    constructor(message, status, code) {
        super(message);
        this.status = status;
        this.code = code;
    }
}

class ConflictRequestError extends ErrorResponse{
    constructor(message = Reason.CONFLICT, statusCode = StatsCode.FORBIDDEN) {
        super(message, statusCode  );
    }
}

class BadRequestError extends ErrorResponse{
    constructor({message = Reason.BAD_REQUEST, code = '', statusCode = StatsCode.BAD_REQUEST}) {
        super(message, statusCode, code);
    }
}

class AuthFailureError extends ErrorResponse {
    constructor(message = Reason.UNAUTHORIZED,code = '', statusCode = StatsCode.UNAUTHORIZED) {
        super(message, statusCode, code);
    }
}

class ForbiddenError extends ErrorResponse{
    constructor(message = Reason.FORBIDDEN, statusCode = StatsCode.FORBIDDEN) {
        super(message, statusCode);
    }
}

class ServerError extends ErrorResponse{
    constructor(message = Reason.INTERNAL_SERVER_ERROR, statusCode = StatsCode.INTERNAL_SERVER_ERROR) {
        super(message, statusCode);
    }
}

class NotAllowAccessPage extends ErrorResponse{
    constructor(message = Reason.METHOD_NOT_ALLOWED,code = '', statusCode = StatsCode.NOT_ACCEPTABLE) {
        super(message, statusCode, code);
    }
}

class NotFound extends ErrorResponse {
    constructor(message = Reason.NOT_FOUND, statusCode = StatsCode.NOT_FOUND) {
        super(message, statusCode);
    }
}

export {
    ConflictRequestError,
    BadRequestError,
    ForbiddenError,
    ServerError,
    NotFound,
    AuthFailureError,
    NotAllowAccessPage
}
