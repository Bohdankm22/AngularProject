// Load the Mongoose module and Schema object
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define a new 'StudentSchema'
const CourseSchema = new Schema({
    courseCode: String,
    courseName: String,
    section: String,
    semester: Number
});

// Create the 'Course' model out of the 'CourseSchema'
mongoose.model('Course', CourseSchema);