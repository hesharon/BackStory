const express = require('express');
const router = express.Router();
const { User } = require("../schema")

router.get('/user/:username', (req, res) => {
  const { username } = req.params;

  // Find the user document
  User.findOne({ username: username })
    .populate('photos') // Populate the 'photos' field with actual images
    .exec()
    .then(user => {
      if (!user) {
        // User not found
        return res.status(404).json({ error: 'User not found' });
      }

      // Retrieve the images from the user's 'photos' field
      const images = user.photos;
      console.log(user, user.photos)

      res.json(images);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
});



module.exports = router;
