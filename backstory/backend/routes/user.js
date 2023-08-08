const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../db/middleware");
const { User, Photo } = require("../schema");

const upload = multer({ storage });

// @route POST /users
// @desc Initialize a user in the database
router.post("/", async (req, res) => {
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
      photos: [],
    });

    // Save the user document to the database
    await user.save();

    return res.status(201).json({ message: "User initialized successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: `Error iniitalizing user: ${error}` });
  }
});

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
router.get("/:email/photos", (req, res) => {
  const { email } = req.params;

  // Find the user document
  User.findOne({ email })
    .populate("photos") // Populate the 'photos' field with actual images
    .exec()
    .then(user => user ? res.json(user.photos) : res.status(404).json({ error: 'User not found' }))
    .catch(error => {
      console.error(error)
      res.status(500).json({ error: `Error getting photos: ${error}` })
    })
})


// @route /users/:email/photos/:id
// @desc Delete photo with :id of user with :email
router.delete("/:email/photos/:id", async (req, res) => {
  const photoId = req.params.id;
  const email = req.params.email;

  try {
    const user = await User.findOne({ email });

    const photoIndex = user.photos.findIndex(
      (photo) => photo._id.toString() === photoId
    );

    if (photoIndex === -1) {
      return res.status(404).send("Photo not found");
    }
    user.photos.splice(photoIndex, 1);
    await user.save();

    res.send("Photo deleted successfully");
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: `Error deleting photo: ${error}` })
  }
});

// @route /users/:email/photos
// @desc Upload photo to user with :email
router.post("/:email/photos", upload.single("file"), async (req, res) => {
  const { caption } = req.body;
  const { email } = req.params;
  const id = req.file.id;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $push: { photos: { photoId: id, caption } } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
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
      return res.status(404).json({ error: 'User not found' })
    }
    const photoToUpdate = user.photos.find((photo) => photo._id.toString() === photoId)
    if (!photoToUpdate) {
      return res.status(404).json({ error: 'Photo not found' })
    }

    photoToUpdate.caption = caption
    const newUser = await user.save()
    res.json(newUser)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: `Error updating photo caption: ${error}` })
  }
});

// @route POST /users/:userId/collections
// @desc Create a new collection
router.post("/:email/collections", async (req, res) => {
  const email = req.params.email;

  try {
    const user = await User.findOne({ email });
    user.collections.push({ title: req.body.title, photos: [] });
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// @route PUT /users/:userId/collections/:collectionId
// @desc Update a collection by adding or removing photos
router.put("/:email/collections/:collectionId", async (req, res) => {
  const email = req.params.email;

  try {
    const user = await User.findOne({ email });
    const collection = user.collections.id(req.params.collectionId);
    collection.photos = req.body.photos;
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// @route GET /users/:userId/collections
// @desc Get all collections for a user
router.get("/:email/collections", async (req, res) => {
  const email = req.params.email;

  try {
    const user = await User.findOne({ email });
    res.send(user.collections);
  } catch (error) {
    res.status(500).send(error);
  }
});

// @route GET /users/:email/collections/:collectionId/photos
// @desc Get all photos for a user's specific collection by collectionId
router.get("/:email/collections/:collectionId/photos", async (req, res) => {
  const { email, collectionId } = req.params;

  try {
    // Find the user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Get the specific collection
    const collection = user.collections.id(collectionId);
    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    // Extract photoIds from the specific collection
    const collectionPhotoIds = collection.photos.map((photo) =>
      photo.toString()
    );

    // Filter the user's photos to only include those with IDs matching the collectionPhotoIds
    const photosInCollection = user.photos.filter((photo) =>
      collectionPhotoIds.includes(photo._id.toString())
    );

    res.json(photosInCollection);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
