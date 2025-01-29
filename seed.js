require('dotenv').config();
const mongoose = require('mongoose');
const Student = require('./models/Student'); // Adjust the path if necessary

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/students_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Student Data
const students = [
    { name: 'Murtadha Abdulameer' },
    { name: 'Khawla Ahmed Abdulla' },
    { name: 'Hussain Nader Mohsen Ahmed Ali Abdulnabi' },
    { name: 'Yasmeen Abuhendi' },
    { name: 'Abdulla Sameer Alheela' },
    { name: 'Nargess Emile Jaafar Almahdi' },
    { name: 'Ahmed Almashaur' },
    { name: 'Salman Ameen Aqeel' },
    { name: 'Abdulla Bakhsh' },
    { name: 'Hamdan Abdulsaleem Chitari' },
    { name: 'Sayed Falah' },
    { name: 'Fares Yusuf Abdulla Yusuf' },
    { name: 'Ali Habib' },
    { name: 'Zainab Hammad' },
    { name: 'Jassim Hayat' },
    { name: 'Hawra Abdulraoof Ahmed Ahmed Nowrooz Husain' },
    { name: 'Mohamed Thamer' },
    { name: 'Aqeela Alghasra' },
    { name: 'Abbas Husain' },
    { name: 'Lulwa Alsayegh' }
];

// Seed Database
const seedDB = async () => {
    try {
        await Student.deleteMany(); // Clears existing students
        await Student.insertMany(students);
        console.log('Database Seeded Successfully');
        mongoose.connection.close(); // Close connection
    } catch (err) {
        console.error('Seeding Error:', err);
        mongoose.connection.close();
    }
};

seedDB();
