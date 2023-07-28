
const express = require('express')
const router = express.Router()
const multer = require('multer')
const { storage } = require('../db/middleware')
const { User } = require("../schema")

const upload = multer({ storage })

// @route POST /users 
// @desc Initialize a user in the database
router.post('/', async (req, res) => {
  try {
    // Extract the user data from the request body
    const { username } = req.body;
    // Create a new user document based on the user schema
    const user = new User({
      username,
      email,
      bio: "",
      friends: [],
      collections: [],
      photos: []
    });

    // Save the user document to the database
    await user.save();

    return res.status(201).json({ message: 'User initialized successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: `Error iniitalizing user: ${error}` });
  }
})

// @route /users/:email
// @desc Get user with :email
router.get('/:email', (req, res) => {
  const { email } = req.params

  User.findOne({ email })
    .then(user => user ? res.json(user) : res.status(404).json({ error: 'User not found' }))
    .catch(error => {
      console.error(error)
      res.status(500).json({ error: `Error getting user: ${error}` })
    })
  }
)

// @route /users/:email/photos
// @desc Get all photos of user that matches email
router.get('/:email/photos', (req, res) => {
  const { email } = req.params

  // Find the user document
  User.findOne({ email })
    .populate('photos') // Populate the 'photos' field with actual images
    .exec()
    .then(user => user ? res.json(user.photos) : res.status(404).json({ error: 'User not found' }))
    .catch(error => {
      console.error(error)
      res.status(500).json({ error: `Error getting photos: ${error}` })
    })
})

// @route /users/:email/photos/:id
// @desc Delete photo with :id of user with :email
router.delete('/:email/photos/:id', async (req, res) => {
  const photoId = req.params.id
  const email = req.params.email

  try {
    const user = await User.findOne({ email })
    
    const photoIndex = user.photos.findIndex(photo => photo._id.toString() === photoId)
    
    if (photoIndex === -1) {
      return res.status(404).send('Photo not found')
    }
    user.photos.splice(photoIndex, 1)
    await user.save()

    res.send('Photo deleted successfully')
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: `Error deleting photo: ${error}` })
  }
})

// @route /users/:email/photos
// @desc Upload photo to user with :email
router.post('/:email/photos', upload.single('file'), async (req, res) => {
  const { caption } = req.body
  const { email } = req.params
  const id = req.file.id

  try {
    const updatedUser = await User.findOneAndUpdate({ email }, { $push: { photos: { photoId: id, caption } } }, { new: true })
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(updatedUser.photos)
  } catch (err) {
      console.error(error)
      res.status(500).json({ error: `Error uploading photo: ${error}` })
  }
})

// @route /users/:email/photos/:photoId
// @desc Update user's photo's caption
router.put('/:email/photos/:photoId', async (req, res) => {
  const { caption } = req.body
  const { email, photoId } = req.params

  try {
    const user = await User.findOne({ email })
    if (!user) {
      throw new Error('User not found')
    }
    const photoToUpdate = user.photos.find((photo) => photo._id.toString() === photoId)
    if (!photoToUpdate) {
      throw new Error('Photo not found');
    }

    photoToUpdate.caption = caption
    const newUser = await user.save()
    res.json(newUser)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: `Error updating photo caption: ${error}` })
  }
})

module.exports = router
