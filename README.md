# BackStory

## Project Description
Backstory is a photo collection/sharing application where you can write a description on the back of a photo, similar to how your parents might write a little something on the back of a physical, printed photo. You can tap the image to flip it over and reveal the description, and vice versa. The aim is to provide users with a way to curate their photos in a more meaningful way - for example, you can organize photos into collections (e.g. grad trip, grandma’s 90th birthday etc.). Captions  provide the context necessary to turn moments into memories. 

We will need to store user credentials and metadata pertaining to a photo (caption text, user id, date of creation), which would all be strings. We also need to store photos, and Mongo’s GridFS specification can help us do that. Users will be able to create and delete accounts, collections, and captioned photos.

If time permits, we’d like to implement social features. This would mean the ability to add friends and collaborate on collections, so that you can all add memories to the trip you made to Mexico together, for example. Another stretch goal would be to implement a feature where you can export a captioned photo to a Polaroid-like format, where the caption is written underneath the photo. This will make it easy to share with others over other messaging platforms.

## Project Requirements
### Minimal Requirements
* Setup and design the MongoDB database structure
  * Setup the MongoDB cluster
  * Hook up the DB with the code
  * Design the database document structures. The following is a tentative design:
  ```
  // Mongo object structure
  {
  	uid: string;
  	friends: string[];
  	collections: Photo[];
  	photos: Photo[];
  }

  // Photo
  {
  	uid: string;
  	timestamp: Date;
  	photo: string; // binary data stored with GridFS
  }
  ```