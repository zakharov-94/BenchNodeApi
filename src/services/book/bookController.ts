import { BookModel, IBook } from '../../data/models/book.model';

export const addBook = async (book: IBook) => {
    const item = new BookModel(book);
    await item.save();
}

export const getBooks = async () => {
    const books = await BookModel.find();
    return books;
}

export const getBook = async (id: string) => {
    const book = await BookModel.findById(id);
    return book;
}

export const deleteBook = async (id: string) => {
    const book = await BookModel.findByIdAndRemove(id);
    return book;
}