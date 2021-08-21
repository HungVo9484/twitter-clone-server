const express = require('express');

const connectDB = require('./config/db');

const app = express();

const authRoute = require('./routers/auth');
const usersRoute = require('./routers/users');
const profileRoute = require('./routers/profile');
const postsRoute = require('./routers/posts')

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;

//TODO Connect Database
connectDB();

//TODO Init Middleware, json data
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello from Hung Vo')
});

//TODO Define Routes
app.use('/auth', authRoute); 
app.use('/users', usersRoute);
app.use('/profile', profileRoute);
app.use('/posts', postsRoute);

app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
})