const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Submit new contact form
exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Create new contact document
    const newContact = new Contact({
      name,
      email,
      message,
      // ফাইল আপলোড হয়ে থাকলে তার পাথ ডাটাবেসে সেভ হবে
      attachment: req.file ? req.file.path : null 
    });
    
    await newContact.save();
    
    // Send email notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `New Contact from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p><small>Sent from your portfolio website</small></p>
        `,
        attachments: []
      };

      // যদি ফ্রন্টএন্ড থেকে ফাইল পাঠানো হয়, তবে সেটি ইমেইলে যুক্ত হবে
      if (req.file) {
        mailOptions.attachments.push({
          filename: req.file.originalname,
          path: req.file.path
        });
      }

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log('Email error:', err);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    }
    
    res.status(201).json({
      success: true,
      message: 'Message received successfully!',
      data: newContact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get all contacts (for admin)
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get single contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Delete contact
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};  