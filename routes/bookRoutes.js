const mongoose = require('mongoose');

const Book = mongoose.model('Book');

module.exports = app => {
    app.get('/books', (req, res)=>{
        res.send("This still works.")
    });
}