const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');
// Cors 


const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300','http://localhost:5500']
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}
app.use(cors(corsOptions))
app.use(express.static('public'));
// var express = require('express')
// var cors = require('cors')
// var app = express()
 
// var corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
 
// app.get('/products/:id', cors(corsOptions), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for only example.com.'})
// })
 
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

const connectDB = require('./config/db');
connectDB();
app.use(express.json());

// const cors = require('cors');
// // Cors 
// const corsOptions = {
//   origin: ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300','http://localhost:5500']
//   // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
// }
// app.use(cors(corsOptions))
// app.use(express.static('public'));
// const connectDB = require('./config/db');
// connectDB();
// app.use(express.json());
// >>>>>>> 42c6c1a17b3e59f271abdcaecb7427c39423110e
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT, () => { 
    console.log(`Listening on port ${PORT}`);
});

