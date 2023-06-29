const express = require('express');
const router = express.Router();
const multer = require('multer');

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/'); // Set the destination folder for uploaded files
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname); // Set the original filename for the uploaded file
  }
});

// Create a Multer instance with the storage configuration
const upload = multer({ storage });

// POST /photos/upload - Upload a photo
router.post('/upload', upload.single('photo'), (req, res) => {
  // Access the uploaded file via req.file
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Here, you can save the uploaded file information to your MongoDB collection,
  // such as the filename, user ID, etc.

  // Return a response indicating success
  return res.status(200).json({ success: 'Photo uploaded successfully' });
});

module.exports = router;
