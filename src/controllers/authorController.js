import { author } from "../models/Author.js";


class AuthorController {

    static listAuthors = async (req, res, next) => {
        try {
            const authorList = await author.find({});
            res.status(200).json(authorList);
        } catch (error) {
            next(error);
        }
    };

    static listAuthorById = async (req, res, next) => {
        try {
            const id = req.params.id;
            const found = await author.findById(id);
            if (found !== null) {
                res.status(200).json(found);
            } else {
                res.status(404).json({ message: 'NOT FOUND!!!!!' });
            }
        } catch (error) {
            next(error);
        }
    };

    static addAuthor = async (req, res, error) => {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({
                message: "Author added", author:
                    newAuthor
            });
        } catch (error) {
            next(error);
        }
    }

    static updadeAuthorById = async (req, res, next) => {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Author Updated" });
        } catch (error) {
            next(error);
        }
    };

    static deleteAuthorById = async (req, res, next) => {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({ message: "Author Deleted" });
        } catch (error) {
            next(error);
        }
    };
};

export default AuthorController;