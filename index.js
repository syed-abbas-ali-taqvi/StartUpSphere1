const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jobRouter = require('./routes/job')
const bodyParser = require('body-parser')

dotenv.config();

const mongoUrl = 'mongodb+srv://AbbasAliTaqvi:abbasali7460@startup-sphere.n0g7znl.mongodb.net/StartUp-Sphere'

 mongoose.connect(process.env.MONGO_URL || mongoUrl)
    .then(() => console.log('connnected to Startup-Sphere Database ${}'))
    .catch((err) => console.log(err));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/jobs', jobRouter)


app.listen(process.env.PORT || port, '0.0.0.0', () => console.log(`StartUp-Sphere listening on port ${process.env.PORT}!`))
 