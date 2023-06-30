const mongoose = require('mongoose');
const { Schema } = mongoose;

// Photo schema
const photoSchema = new Schema({
  uid: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  filename: { type: String, required: true }, // Store the filename of the uploaded image
  contentType: { type: String, required: true } // Store the content type of the image
});

// userSchema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  friends: [{ type: String }],
  collections: [{ type: Schema.Types.ObjectId, ref: 'Photo' }],
  photos: [{ type: String }]
});

// Create models based on the schemas
const Photo = mongoose.model('Photo', photoSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Photo, User };
