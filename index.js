const express = require('express');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const data = require('./config/dev');
const bodyParser = require('body-parser');
const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 'https://bookzies.netlify.app');
    next();
})
require('./models/Book');
require('./routes/bookRoutes')(app);

mongoose.Promise = global.Promise;
mongoose.connect(data.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Server Online.");
})
app.listen(port, () => {
    console.log(`Bookzies server listening at http://localhost:${port}`);
});