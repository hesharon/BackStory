const express = require("express");
const mongoose = require("mongoose");
const mongodb = require("mongodb")
const Grid = require('gridfs-stream');
const {
  GridFsStorage
} = require("multer-gridfs-storage");
const cors = require("cors");
const crypto = require('crypto')
const path = require("path")
const multer = require('multer')
const methodOverride = require('method-override');
const userRoutes = require('./routes/user')
const photoRoutes = require('./routes/photos')
const { User, Photo } = require("./schema")
require("dotenv").config();

const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.q1hfmt9.mongodb.net/?retryWrites=true&w=majority`
const conn = mongoose.createConnection(mongoURI);
mongoose.connect(mongoURI)

let gfs, gridfsBucket;
conn.once('open', () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads'
  });

  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
})

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

app.use(methodOverride('_method'));
// Allow CORS
app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Parse application/json
app.use(express.json());

// TODO: add routes
app.use('/users', userRoutes)
app.use('/photos', photoRoutes)

// Can't export upload correctly to make this work so just gonna leave this here for now.
// @route POST /upload
// @desc  Uploads file to DB
app.post('/photos/upload', upload.single('file'), (req, res) => {
  const { username, caption } = req.body
  const id = req.file.id

  User.findOneAndUpdate({ username: username }, { $push: { photos: { photoId: id, caption } } }, { new: true }).then(updatedUser => {
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

// @route GET /image/:filename
// @desc Display Image
app.get('/image/:id', (req, res) => {
  try {
    const objectId = new mongodb.ObjectId(req.params.id)
    const readstream = gridfsBucket.openDownloadStream(objectId);

    readstream.pipe(res);
  } catch (error) {
    console.error(error)
  }
});

app.delete('/:id', async (req, res) => {
  const photoId = req.params.id;

  try {
    const user = await User.findById('649ded62e82047b1775942f9');

    const photoIndex = user.photos.findIndex((photo) => photo._id.toString() === photoId);

    if (photoIndex === -1) {
      return res.status(404).send('Photo not found');
    }
    user.photos.splice(photoIndex, 1);
    await user.save();

    res.send('Photo deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to delete photo');
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // listens on this port
