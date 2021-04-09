const mongoose = require('mongoose');

const Book = mongoose.model('Book');

module.exports = app => {
    app.get('/books', async (req, res)=>{

        const books = await Book.find({
            $text : {
                $search: req.query.q
            }

        }).limit(10);
        await res.json(books);
    });
}