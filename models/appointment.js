const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    name: String,
    date: { type: date, required: true},
    time: { type: String, required: true}
    
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;