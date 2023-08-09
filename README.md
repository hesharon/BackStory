# BackStory

### Description
Backstory is a unique photo collection and sharing app that brings back the sentimental touch of physical photos. By allowing users to write descriptions on the back of their digital images, reminiscent of the old days when parents used to do the same on printed photos, Backstory elevates the experience of curating memories. With a simple tap, users can flip their photos to reveal the heartfelt captions, giving context and depth to each moment, and enabling them to create meaningful collections that turn ordinary moments into cherished memories. Say goodbye to scattered images and hello to a more nostalgic and personal way of reliving your most precious moments. 

## Goals
#### Minimal Requirements
✅ Can login/signup
✅ Can upload a photo & caption
✅ Can view profile page & gallery of photos
✅ Can view collections
❌ Pages are responsive

#### Standard Requirements
✅ Can create collections
✅ Photos can be uploaded to collections
✅ Photo flips on click
✅ Can edit caption of a photo
❌ Can view friends list

#### Stretch Requirements
❌ Can see photos of friends in user's feed
❌ Users can collaborate and upload to the same album
✅ Can export photo to polaroid format

## Tech Stack
#### Unit 1 - HTML, CSS, JS & Unit 2 - React & Redux

Our frontend utilizes ReactJS with JSX syntax (HTMl in Javascript), and CSS for styling purposes. React Hooks and React Redux slices and thunks are utilized for efficient state management and handling HTTP requests, resulting in a smooth user experience and improved app performance. We took a pragmatic approach by designing our own custom components for most parts of the app, enhancing flexibility and maintainability while adhering to best practices to keep the CSS code separate from the JS code. For more complex components, we harnessed the capabilities of MaterialUI. The organization of code into separate folders for pages, custom components, actions, reducers, and slices enables better code modularity and scalability, streamlining development and debugging processes.

#### Unit 3 - Node & Express
In our application, we utilized NodeJS and Express, following best practices to build a robust and efficient backend. By leveraging these technologies, we were able to create RESTful HTTP endpoints, enabling seamless communication between the client-side and server-side components through CRUD operations. The use of NodeJS and Express ensured clean and clear code, making maintenance and future updates hassle-free. We implemented error handling for 404 and 500 errors, providing a user-friendly experience and enhancing the overall reliability of the application. Additionally, we integrated the envvar npm package to manage environment variables securely, safeguarding sensitive information and maintaining better control over our app's configurations.

#### Unit 4 - MongoDB
In our application, we harnessed the power of MongoDB with Mongoose to efficiently manage and store user documents, photos, and collections. By following best practices, we achieved a clean and clear codebase, ensuring seamless integration of MongoDB's capabilities. MongoDB's NoSQL nature offered unparalleled flexibility, accommodating dynamic changes in user data and enhancing the application's scalability. Leveraging Mongoose as an expressive ODM library simplified interactions with MongoDB, resulting in well-organized and reusable schemas. Notably, we employed MongoDB's GridFS to seamlessly handle user photo uploads, optimizing storage and retrieval of large media files. 
 
#### Unit 5 - Builds & Deployment
Our application implements seamless builds and deployments using Render.com, a user-friendly platform that streamlines both frontend and backend deployment processes. By adhering to industry best practices and maintaining a clean codebase, we seamlessly integrate with Render.com's deployment pipelines, ensuring efficient and reliable updates. Compared to other similar deployment platforms, Render.com stands out with its intuitive workflow, automatic scaling, and built-in HTTPS support, simplifying the management of deployments.

## Above and Beyond
#### Fully Responsive
The application is fully responsive across all screen sizes. It is optimized for mobile and desktop view. 

#### Accessibility
The application has been ran through Accessbility Insights for Web's assessment and no major accessbility problems were detected.

## Next Steps
We plan to allow users to fully socialize with other users. This includes, liking and commenting on other people's photos, and allowing users to collaborate on collections. Implementing a search functionality will also allow users to easily find specific photos or collections based on keywords or tags. Finally, some user's may want to keep some of their photos private, so having a feature to allow users to toggle the privacy of a photo can ensure users are comfortable with uploading their photos to the application.

## Contributions
#### Alvin Xu
I worked on the gallery, collection, and upload photo UI components. I also deployed our application to Render. I also implemented the export to Polaroid functionality.
#### Danny Wei
I worked on some of the frontend components such as the Collections page, and adding buttons to the cards. During the redux phase of the project, I implemented the reducers for the delete and edit functionalities. When our app transitioned to MongoDB, I helped in hooking up the PATCH endpoint to our reducers.
#### Johnny Liao
#### Sharon He
I worked on setting up Auth0, login, and logout, as well as creating an Auth0 action flow connecting to MongoDB. I also implemented the Profile page and custom components such as the navbar, and made changes to our Redux store. In regards to the backend, I implemented endpoints such as adding and updating a photo.
#### Taher Ankleshwaria

