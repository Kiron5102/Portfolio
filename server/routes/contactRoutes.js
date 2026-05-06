const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { submitContact, getAllContacts, getContactById, deleteContact } = require('../controllers/contactController');

// ফাইল স্টোরেজ কনফিগারেশন (ফাইলের আসল নাম এবং ফরম্যাট ঠিক রাখার জন্য)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // ফাইলগুলো 'server/uploads' ফোল্ডারে জমা হবে
  },
  filename: function (req, file, cb) {
    // ফাইলের নাম ইউনিক করার জন্য বর্তমান সময় (Timestamp) যোগ করা হলো
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// ১. কন্টাক্ট ফর্ম সাবমিট (Public Route)
// এখানে 'attachment' নামটি আপনার ফ্রন্টএন্ডের FormData এর কি (key) নামের সাথে মিল থাকতে হবে
router.post('/', upload.single('attachment'), submitContact);

// ২. সব মেসেজ দেখা (Admin Route)
router.get('/', getAllContacts);

// ৩. নির্দিষ্ট একটি মেসেজ দেখা (Admin Route)
router.get('/:id', getContactById);

// ৪. মেসেজ ডিলিট করা (Admin Route)
router.delete('/:id', deleteContact);

module.exports = router; 