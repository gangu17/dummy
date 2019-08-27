const result = require('./result');
const helper = require('./util');
const userSettingModel = require('./model').userSettings;

module.exports = {
    updateStatus: (event, cb, principals) => {
        const data = helper.getBodyData(event);
        console.log('data', JSON.stringify(data));
        if (!data) {
            result.invalidInput(cb);
        } else {
            dummyConsole();
            const clientId = (helper.isAdmin(principals)) ? principals['sub'] : principals['clientId'];
            data.clientId = clientId;
            userSettingModel.updateOne({clientId: clientId}, {isNewUser: data.isNewUserStatus}).then((data) => {
                result.sendSuccess(cb,data);
            }).catch((error) => {result.sendServerError(cb)});
        }
    }
};

function dummyConsole() {
    console.log('console');
}

