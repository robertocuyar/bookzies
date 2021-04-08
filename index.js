const express = require('express');

const port = 5000;
const mongoose = require('mongoose');
const data = require('./config/dev');
const bodyParser = require('body-parser');
const app = express();
require('./models/Book');
require('./routes/bookRoutes')(app);

mongoose.Promise = global.Promise;
mongoose.connect(data.mongoURI, {useNewUrlParser: true});
app.use(bodyParser.json());
app.get('/', (req, res)=>{
   res.send("Welcome!");
})
app.listen(port, ()=>{
   console.log(`Example app listening at http://localhost:${port}`);
});