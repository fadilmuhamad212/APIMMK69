const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

dotenv.config();

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//Import Routes
const postRoute = require('./routes/post');

app.use('/data', postRoute);

//Routes
app.get('/',  (req, res)=>{
    res.send('Yeay!! <br/><br/>How To use: <br/><br/>https://apirplbk35.herokuapp.com/data/ include this for get all <br/><br/>/n/ = Search by Name (Case Sensitive) <br/><br/>/m/ = Search by Publisher (Case Sensitive) <br/><br/>/post = To add some data ');
    res.send('');
    res.send('How To use:');
    res.send('https://apirplbk35.herokuapp.com/data/ include this for get all');
    res.send('/n/ = Search by Name (Case Sensitive)');
    res.send('/m/ = Search by Publish (Case Sensitive)');
    res.send('/post = To add some data');
})



//Connect DB
mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false }, ()=> console.log('connected'));

//listen to server
// app.listen(3001)

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
  });