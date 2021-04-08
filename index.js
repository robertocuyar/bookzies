const express = require('express');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const data = require('./config/dev');
const bodyParser = require('body-parser');
const app = express();
app.use((req, res, next)=>{
   res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
   next();
})
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