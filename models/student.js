// Student Model
const mongoose = require('mongoose')
const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    favoriteColor: { type: String, },
    favoriteMovie: { type: String,  }
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student