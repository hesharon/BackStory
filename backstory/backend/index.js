const express = require('express');
const methodOverride = require('method-override');
const userRoutes = require('./routes/user');
const photoRoutes = require('./routes/photos');
const envvar = require('envvar');
const cors = require('cors');

const PORT = envvar.string('PORT') || 8000;
const app = express();

app.use(methodOverride('_method'));
// Allow CORS
const corsOptions = {
  origin: 'https://backstory-frontend.onrender.com',
};
app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Parse application/json
app.use(express.json());

// TODO: add routes
app.use('/users', userRoutes);
app.use('/photos', photoRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // listens on this port
