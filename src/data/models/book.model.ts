import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: {
        type: String,
        required: 'This field is required!'
    },
    author: {
        type: String
    },
    pagesCount: {
        type: Number
    }
});

interface IBook {
    title: string,
    author: string,
    pagesCount: number
}

const BookModel = mongoose.model('Books', BookSchema);
export { IBook, BookModel }