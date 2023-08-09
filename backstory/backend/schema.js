const mongoose = require('mongoose');
const { Schema } = mongoose;

// Photo schema
const photoSchema = new Schema({
  uid: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  filename: { type: String, required: true }, // Store the filename of the uploaded image
  contentType: { type: String, required: true } // Store the content type of the image
});

// Collection schema
const collectionSchema = new Schema({
  title: { type: String, required: true },
  photos: [{ type: Schema.Types.ObjectId }] // references to Photo IDs in GridFS
})

// userSchema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  bio: { type: String },
  friends: [{ type: String }],
  collections: [collectionSchema],
  photos: [{
    photoId: { type: Schema.Types.ObjectId },
    caption: { type: String }
  }]
});

// Create models based on the schemas
const Photo = mongoose.model('Photo', photoSchema);
const User = mongoose.model('User', userSchema);
const Collection = mongoose.model('Collection', collectionSchema);

module.exports = { Photo, User, Collection };
