const result = require('./result');
const geofenceModel = require('./model').geofenceModel;
const helper = require('./util');
const constant = require('./constant')();

module.exports = {

    saveGeofence: (event, cb, principals) => {
        const data = helper.getBodyData(event);
        console.log(data);
        if (!data) {
            result.invalidInput(cb);
        } else {
            const clientId = (helper.isAdmin(principals)) ? principals['sub'] : result.sendUnAuth(cb);
            console.log('clientId', clientId);
            if (!clientId) {
                result.sendUnAuth(cb);
            } else {
                data.clientId = clientId;
                data.updated_at = Date.now();
                data.regionId = randomId();
                console.log('data', JSON.stringify(data));
                return new geofenceModel(data).save().then((fence) => {

                        console.log('fence',fence);
                    result.sendSuccess(cb, fence);
                }).catch((err) => handleError(err, cb));
            }

        }

    }
};

function handleError(error, cb) {
    console.log(error);
    const err = error.errors;
        result.sendServerError(cb);
}

function randomId(){
    return Math.floor(Math.random()*899999+100000);
}