const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema( {
    bookAuthors: String,
    bookDesc: String,
    bookEdition: String,
    bookFormat: String,
    bookIsbn: String,
    bookPages: String,
    bookRating: Number,
    bookRatingCount: Number,
    bookReviewCount: Number,
    bookTitle: String,
    genres: String,
    imageUrl: String
});

mongoose.model('Book', bookSchema);