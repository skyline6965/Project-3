const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    title: String,
    start: { type: Date, required: true},
    end: { type: Date, required: true},
    allDay: {type: Boolean, require: true},
    resource: {type: String}
    
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;