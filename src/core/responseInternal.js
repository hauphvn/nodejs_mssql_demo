class ResponseInternal {
    constructor({message, metadata = null, statusCode}) {
        this.message = message;
        this.metadata = metadata;
        this.statusCode = statusCode
    }

    send(res) {
        return res.status(this.statusCode).json(this);
    }
}

export default  ResponseInternal;
