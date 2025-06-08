import { author } from "../models/Author.js";
import book from "../models/Book.js";

class BookController {

    static async listBooks(req, res) {
        try {
            const booksList = await book.find({});
            res.status(200).json(booksList);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed!` });
        }
    };

    static async listBookById(req, res) {
        try {
            const id = req.params.id;
            const livroFound = await book.findById(id);
            res.status(200).json(livroFound);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed!` });
        }
    };

    static async addBook(req, res) {
        const newBook = req.body;
        try {
            const authorFound = await author.findById(newBook.author);
            const bookALL = {...newBook, author: {... authorFound._doc}};
            const bookCreated = await book.create(bookALL);
            res.status(201).json({
                message: "Book added", book:
                bookCreated });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed!` });
        }
    }

    static async updadeBookById(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Book Updated" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed!` });
        }
    };

    static async deleteBookById(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({ message: "Book Deleted" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed!` });
        }
    };

    static async listBookByPublisher(req, res) {
        const publisher = req.query.publisher
        try {
            const booksByPublisher = await book.find({publisher: publisher})
            res.status(200).json(booksByPublisher);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed!` });
        }
    };
};

export default BookController;