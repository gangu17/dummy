const common = require('./error').CODES;
const customer = require('./error').CUSTOMER_CODES;


module.exports = {

    sendServerError: (cb) => {
        cb(null, formResponse(common.SERVER_ERROR, {}));
    },

    sendSuccess: (cb, body) => {
        cb(null, formResponse(common.SUCCESS, body));
    },

    businessMissing: (cb) => {
        cb(null, formResponse(common.BUSINESS_TYPE_REQUIRED, {}));
    },

    sendResult: (statusCode, body, cb) => {
        cb(null, statusCode, body);
    },

    sendUnAuth: (cb) => {
        cb(null, formResponse(common.AUTH, {message: 'Unauthorized'}));
    },

    fromTrigger: (cb) => {
        console.log('fromTrigger');
        cb(null, formResponse(400, ''));
    },

    invalidInput: (cb) => {
        cb(null, formResponse(common.BAD_REQUEST, ''));
    },


    invalidName: (cb) => {
        cb(null, formResponse(common.NAME_INVALID, {message: 'invalid Name'}));
    },

    invalidPhone: (cb) => {
        cb(null, formResponse(common.PHONE_INVALID, {message: 'invalid Phone'}));
    },

    invalidEmail: (cb) => {
        cb(null, formResponse(common.EMAIL_INVALID, {message: 'invalid email'}));
    },

    invalidAddress: (cb) => {
        cb(null, formResponse(customer.ADDRESS_INVALID, {message: 'invalid address'}));
    },

    Duplication: (cb) => {
        cb(null, formResponse(customer.EMAIL_OR_PHONE_EXISTS, {message: 'Duplication of customer phone'}));
    },
};

function formResponse(code, body) {
    const response = {headers: {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'}};
    const result = (typeof body === 'object') ? JSON.stringify(body) : body;
    return Object.assign(response, {statusCode: code, body: result});
}
