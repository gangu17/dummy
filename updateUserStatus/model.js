const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constant = require('./constant')();
const tables = constant.TABLES;


const geofenceSchema = new Schema({
    name: {type: String},
    isDeleted: {type: Number, default: 0},
    description: {type: String},
    clientId: {type: String},
    driverId: {type: Schema.Types.Mixed, required: true},
    teamId: {type: Schema.Types.ObjectId, ref: tables.TEAM, required: true},
    location: {type: Schema.Types.Mixed},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date},
    regionId: {type: String, required: true},
    driverAllSelected:  {type: String}
});

const geofenceModel = mongoose.model('geofences', geofenceSchema);

module.exports = {
    geofenceModel: geofenceModel
};