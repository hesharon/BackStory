const express = require("express");
const mongoose = require("mongoose");
const Grid = require('gridfs-stream');
const {
  GridFsStorage
} = require("multer-gridfs-storage");
const cors = require("cors");
const crypto = require('crypto')
const path = require("path")
const multer = require('multer')
const userRoutes = require('./routes/user')
const photoRoutes = require('./routes/photos')
const { User, Photo } = require("./schema")
require("dotenv").config();

const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.q1hfmt9.mongodb.net/?retryWrites=true&w=majority`
const conn = mongoose.createConnection(mongoURI);
mongoose.connect(mongoURI)

let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage })

const PORT = process.env.PORT || 8000;
const app = express();

// Allow CORS
app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Parse application/json
app.use(express.json());

// TODO: add routes
app.use('/users', userRoutes)
// app.use('/photos', photoRoutes)

// Can't export upload correctly to make this work so just gonna leave this here for now.
// @route POST /upload
// @desc  Uploads file to DB
app.post('/photos/upload', upload.single('file'), (req, res) => {
  const { username } = req.body
  const id = req.file.id

  User.findOneAndUpdate({ username: username }, { $push: { photos: id } }, { new: true }).then(updatedUser => {
    if (!updatedUser) {
      // User not found
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(req.file);
  })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
});



app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // listens on this port
