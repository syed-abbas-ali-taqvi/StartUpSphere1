const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

 mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('connnected to Startup-Sphere Database'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT || port, () => console.log(`StartUp-Sphere listening on port ${process.env.PORT}!`))
 