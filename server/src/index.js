require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const searchRoutes = require('./routes/search');
const passport = require('./config/passport');
const topSearchesRoutes = require('./routes/topSearches');

const app = express();

const PORT = 5000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/top-searches', topSearchesRoutes);

app.get('/', (req, res) => res.json({ ok: true, message: 'Image Search App API' }));

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start server', err.message);
    process.exit(1);
  }
};

start();
