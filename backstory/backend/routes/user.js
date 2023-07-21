
const express = require('express');
const router = express.Router();
const { User } = require("../schema");

// POST /users/createUser - Initialize a user in the database
router.post('/createUser', async (req, res) => {
  try {
    // Extract the user data from the request body
    const { username } = req.body;
    // Create a new user document based on the user schema
    const user = new User({
      username,
      friends: [],
      collections: [],
      photos: []
    });

    // Save the user document to the database
    await user.save();

    return res.status(201).json({ message: 'User initialized successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to initialize user' });
  }
});

module.exports = router;
