require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// ১. Database Connection
connectDB();

// ২. Middleware
app.use(cors()); // CORS এরর ফিক্স করার জন্য
app.use(express.json()); // JSON ডাটা রিসিভ করার জন্য
app.use(express.urlencoded({ extended: true })); // ফর্ম ডাটা হ্যান্ডেল করার জন্য

// ৩. Static Folder Setup (যাতে আপলোড করা ফাইল ব্রাউজারে দেখা যায়)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ৪. Routes
app.use('/api/contact', contactRoutes);

// ৫. Health Check Route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running smoothly!' });
});

// ৬. Global Error Handler (অপশনাল কিন্তু ভালো)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ success: false, message: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 