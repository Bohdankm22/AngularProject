// Load the Mongoose module and Schema object
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define a new 'StudentSchema'
const StudentSchema = new Schema({
    studentNumber: Number,
    password: String,
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    phoneNumber: String,
    email: String,
    program: String
});

// Create the 'Student' model out of the 'StudentSchema'
mongoose.model('Student', StudentSchema);