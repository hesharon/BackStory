const mongoose = require('mongoose');
const { Schema } = mongoose;

// Photo schema
const photoSchema = new Schema({
  uid: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  photo: { type: String, required: true } // Assuming we store the photo as a string representation
});

// userSchema
const userSchema = new Schema({
  uid: { type: String, required: true },
  friends: [{ type: String }],
  collections: [{ type: Schema.Types.ObjectId, ref: 'Photo' }],
  photos: [{ type: Schema.Types.ObjectId, ref: 'Photo' }]
});

// Create models based on the schemas
const Photo = mongoose.model('Photo', photoSchema);
const UserObject = mongoose.model('MainObject', userSchema);

module.exports = { Photo, UserObject };
